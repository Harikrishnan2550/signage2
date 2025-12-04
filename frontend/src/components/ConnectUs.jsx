import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import API from "../api/axios"; // ⭐ NEW (axios instance)
import { Toaster, toast } from "sonner";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { HiOutlineMailOpen } from "react-icons/hi";
import { TiMessages } from "react-icons/ti";

export default function ConnectUs() {
  const sectionRef = useRef(null);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  const serviceOptions = [
    "Frontage Signages",
    "Interior Signages",
    "Wall & Glass Branding",
    "Directional Signages",
    "Laser & CNC Cutting",
  ];

  /* ⭐ Email Submit Handler using Axios & NodeMailer */
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = formRef.current;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value,
    };

    try {
      await API.post("/contact/send-email", formData);
      toast.success("Message Sent Successfully!", {
        description: "We will contact you shortly.",
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send. Try again.", {
        description: "Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative w-full bg-black text-gray-300 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Toaster */}
      <Toaster richColors closeButton />

      {/* BG GRID */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 128, 32, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 128, 32, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* ORBS */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-[#f58020]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#d4550d]/15 rounded-full blur-3xl"
      />

      {/* LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-white text-4xl md:text-6xl font-extrabold">
            Get in{" "}
            <motion.span
              className="text-[#f58020]"
              animate={{
                textShadow: [
                  "0 0 20px rgba(245,128,32,0.5)",
                  "0 0 40px rgba(245,128,32,0.8)",
                  "0 0 20px rgba(245,128,32,0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Touch
            </motion.span>
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Looking for the best signage company in Kochi? We can help you make
            your brand look amazing.
          </p>
        </motion.div>

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* FORM */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#f58020]/20 to-transparent rounded-2xl blur-xl opacity-50"></div>

            <div className="relative bg-gradient-to-br from-[#0d0d0d] to-black p-8 rounded-2xl border border-[#f58020]/20 backdrop-blur-sm">
              <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-[#f58020]"><TiMessages /></span>
                Send a Message
              </h3>

              <div className="space-y-6">
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input name="name" required type="text" placeholder="Full Name" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50" />
                  <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50" />
                </div>

                {/* PHONE + SERVICE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input name="phone" required placeholder="Phone Number" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50" />

                  <select name="service" required defaultValue="" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-300 focus:border-[#f58020]/50">
                    <option value="" disabled>Select Service</option>
                    {serviceOptions.map((service, i) => (
                      <option key={i} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <textarea name="message" rows="6" required placeholder="Your Message" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50 resize-none" />

                {/* BUTTON */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(245,128,32,0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#f58020] to-[#d4550d] text-white font-bold rounded-xl shadow-xl relative overflow-hidden"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </div>
            </div>
          </motion.form>

          {/* CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-l from-[#d4550d]/20 to-transparent rounded-2xl blur-xl opacity-50"></div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative bg-gradient-to-br from-[#0d0d0d] to-black p-8 rounded-2xl border border-[#f58020]/20 shadow-2xl"
            >
              <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                <span className="text-[#f58020]"><TbTargetArrow /></span>
                Reach Us
              </h3>

              <div className="space-y-8 relative z-10">
                <div className="flex gap-4 items-start cursor-pointer">
                  <span className="text-[#f58020] text-2xl"><IoLocationOutline /></span>
                  <p className="text-gray-400">
                    Near Kinfra Techno Park & Kerala Startup Mission,<br />
                    Kalamassery , Cochin I Kerala
                  </p>
                </div>

                <div className="flex gap-4 items-center cursor-pointer">
                  <span className="text-[#f58020] text-2xl"><IoCallOutline /></span>
                  <p className="text-gray-400">
                    +91-6238139465‬ | +91-9188825935‬
                  </p>
                </div>

                <div className="flex gap-4 items-center cursor-pointer">
                  <span className="text-[#f58020] text-2xl"><HiOutlineMailOpen /></span>
                  <p className="text-gray-400">info@nextlevelsignages.com</p>
                </div>

                {/* MAP */}
                <div className="w-full h-56 rounded-xl overflow-hidden border border-[#f58020]/30 relative group">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.67686259636!2d76.16672441623326!3d9.982368232073966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708600000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-700"
                  ></iframe>

                  <div className="absolute inset-0 bg-black/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
                </div>

              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

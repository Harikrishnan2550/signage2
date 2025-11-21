import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a7bvb6d", // your service ID
        "template_wx9e8jt", // your template ID
        formRef.current,
        "L8a-1dhEPat8PUQN8" // your public key
      )
      .then(() => {
        toast.success("Message Sent Successfully!", {
          description: "We will contact you shortly.",
        });
        setLoading(false);
        formRef.current.reset();
      })
      .catch(() => {
        toast.error("Failed to send. Try again.", {
          description: "Please try again later.",
        });
        setLoading(false);
      });
  };

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative w-full bg-black text-gray-300 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Sonner Toaster */}
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
            Looking for the best signage company in Kochi?
            We can help you make your brand look amazing.
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
                  <input
                    name="name"
                    required
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50"
                  />
                  <input
                    name="email"
                    required
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50"
                  />
                </div>

                {/* PHONE + SERVICE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50"
                  />

                  <select
                    name="service"
                    required
                    defaultValue=""
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-300 focus:border-[#f58020]/50"
                  >
                    <option value="" disabled>
                      Select Service
                    </option>

                    {serviceOptions.map((service, i) => (
                      <option key={i} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <textarea
                  name="message"
                  rows="6"
                  required
                  placeholder="Your Message"
                  className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 focus:border-[#f58020]/50 resize-none"
                />

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
                  <p className="text-gray-400"> Near Kinfra Techno Park & Kerala Startup Mission,<br></br>Kalamassery , Cochin  I  Kerala
</p>
                </div>

                <div className="flex gap-4 items-center cursor-pointer">
                  <span className="text-[#f58020] text-2xl"><IoCallOutline /></span>
                  <p className="text-gray-400">+91 6238 139 465 | +91 9188 825 935</p>
                </div>

                <div className="flex gap-4 items-center cursor-pointer">
                  <span className="text-[#f58020] text-2xl"><HiOutlineMailOpen /></span>
                  <p className="text-gray-400">info@nextlevelsignages.com</p>
                </div>

                <div className="w-full h-56 bg-gradient-to-br from-black to-[#0d0d0d] border border-[#f58020]/30 rounded-xl flex items-center justify-center text-gray-500 cursor-pointer">
                  📍 View Map
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

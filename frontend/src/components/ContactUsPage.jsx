import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import assests from "../assets/assests";
import API from "../api/axios"; // ⭐ NEW — axios instance
import { Toaster, toast } from "sonner";
import {
  MapPin,
  Phone,
  Mail,
  Target,
  MessageSquare,
  Home,
  ChevronRight,
} from "lucide-react";
import { HeadProvider, Title, Meta } from "react-head";

export default function ContactUsPage({ onNav }) {
  /* ---------- Banner Parallax ---------- */
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 300], [0, 120]);

  /* ---------- Section scroll animation ---------- */
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  /* ---------- FORM CONFIG ---------- */
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const serviceOptions = [
    "Frontage Signages",
    "Interior Signages",
    "Wall & Glass Branding",
    "Directional Signages",
    "Laser & CNC Cutting",
  ];

  /* 🔥 Replaced EmailJS → Axios + NodeMailer */
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
    <HeadProvider>
      <Title>Contact Us – Next Level Signages Kochi</Title>
      <Meta
        name="description"
        content="Need a signage quote or assistance? Contact Next Level Signages Kochi for LED sign boards, acrylic letters, branding, and complete signage services across Kerala."
      />
      <>
        {/* TOAST CONTAINER */}
        <Toaster richColors closeButton />

        {/* ------------------------------------------------------ */}
        {/* 🔥 PREMIUM BREADCRUMB BANNER */}
        {/* ------------------------------------------------------ */}
        <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden flex items-center justify-center">
          <motion.div style={{ y: bannerY }} className="absolute inset-0">
            <img
              src={assests.bannerImage}
              alt="Contact Banner"
              className="w-full h-full object-cover brightness-[0.5]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>

          <div className="relative z-10 flex flex-col items-center text-center px-4 mt-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider mb-8 drop-shadow-2xl"
            >
              Get In <span className="text-[#f58020]">Touch</span>
            </motion.h1>

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl overflow-visible"
            >
              <div
                onClick={() => onNav("home")}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
              >
                <Home
                  size={16}
                  className="group-hover:text-[#f58020] transition-colors"
                />
                <span className="text-sm font-bold uppercase tracking-widest">
                  Home
                </span>
              </div>

              <ChevronRight size={16} className="text-gray-600" />

              <div className="relative flex flex-col items-center">
                <span className="text-[#f58020] text-sm font-bold uppercase tracking-widest">
                  Contact
                </span>
                <motion.div
                  className="absolute -bottom-12 right-8 h-[4px] bg-[#f58020] w-[120px] rounded-full shadow-[0_0_10px_#f58020]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ------------------ MAIN SECTION ------------------ */}
        <motion.section
          ref={sectionRef}
          style={{ opacity, y }}
          className="relative w-full bg-black text-gray-300 pb-24 px-6 md:px-16 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(245,128,32,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245,128,32,0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          {/* GRID */}
          <div className="max-w-7xl mx-auto relative z-10 mt-20">
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
                    <span className="text-[#f58020]">
                      <MessageSquare />
                    </span>
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
                      whileHover={{
                        scale: 1.03,
                        boxShadow: "0 10px 40px rgba(245,128,32,0.5)",
                      }}
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
                    <span className="text-[#f58020]">
                      <Target />
                    </span>
                    Reach Us
                  </h3>

                  <div className="space-y-8 relative z-10">
                    <div className="flex gap-4 items-start cursor-pointer">
                      <span className="text-[#f58020] text-2xl">
                        <MapPin />
                      </span>
                      <p className="text-gray-400">
                        Near Kinfra Techno Park & Kerala Startup Mission,
                        <br />
                        Kalamassery , Cochin I Kerala
                      </p>
                    </div>

                    <div className="flex gap-4 items-center cursor-pointer">
                      <span className="text-[#f58020] text-2xl">
                        <Phone />
                      </span>
                      <p className="text-gray-400">
                        +91 6238 139 465 | +91 9188 825 935
                      </p>
                    </div>

                    <div className="flex gap-4 items-center cursor-pointer">
                      <span className="text-[#f58020] text-2xl">
                        <Mail />
                      </span>
                      <p className="text-gray-400">
                        info@nextlevelsignages.com
                      </p>
                    </div>

                    {/* MAP */}
                    <div className="w-full h-56 rounded-xl overflow-hidden border border-[#f58020]/30 relative group">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.553974953936!2d76.35338637482813!3d10.053586990053535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c05877a5619%3A0xad5284353f864835!2sKerala%20Startup%20Mission!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black via-black/50 to-transparent"
          />
        </motion.section>
      </>
    </HeadProvider>
  );
}

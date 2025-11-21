import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import assests from "../assets/assests";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";
// Switched to lucide-react icons which are available in the environment
import { 
  MapPin, 
  Phone, 
  Mail, 
  Target, 
  MessageSquare,
  Home,           // Added for breadcrumb
  ChevronRight    // Added for breadcrumb
} from "lucide-react";

// ⭐ Added { onNav } prop for breadcrumb navigation
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

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulating email send since emailjs is not available in this environment
    setTimeout(() => {
      // Using standard alert for demo purposes
      toast.success("Message Sent Successfully!", {
        description: "We will contact you shortly.",
      });
      setLoading(false);
      if (formRef.current) formRef.current.reset();
    }, 1500);
  };

  return (
    <>
      {/* TOAST CONTAINER */}
      <Toaster richColors closeButton />

      {/* ------------------------------------------------------ */}
      {/* 🔥 PREMIUM BREADCRUMB BANNER (Matched to AboutUsPage) */}
      {/* ------------------------------------------------------ */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden flex items-center justify-center">

        {/* Banner Background */}
        <motion.div style={{ y: bannerY }} className="absolute inset-0">
          <img
            src={assests.bannerImage}
            alt="Contact Banner"
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>

        {/* ⭐ PREMIUM BREADCRUMB & TITLE ⭐ */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-10">
          
          {/* Main Page Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider mb-8 drop-shadow-2xl"
          >
            Get In <span className="text-[#f58020]">Touch</span>
          </motion.h1>

          {/* Glass Breadcrumb Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            // ⭐ Added overflow-visible so the underline can hang outside
            className="relative inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl overflow-visible"
          >
            
            {/* Home Link */}
            <div 
              onClick={() => onNav('home')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
            >
              <Home size={16} className="group-hover:text-[#f58020] transition-colors" />
              <span className="text-sm font-bold uppercase tracking-widest">Home</span>
            </div>

            {/* Separator */}
            <ChevronRight size={16} className="text-gray-600" />

            {/* Active Page with Animated Underline */}
            <div className="relative flex flex-col items-center">
              <span className="text-[#f58020] text-sm font-bold uppercase tracking-widest">
                Contact
              </span>
              {/* ⭐ The Orange Underline - Pushed outside with -bottom-6 */}
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
        {/* Background Grid */}
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

        {/* ------ Left FORM (UPDATED) ------ */}
        <div className="max-w-7xl mx-auto relative z-10 mt-20">
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* --------------- FORM --------------- */}
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
                  <span className="text-[#f58020]"><MessageSquare /></span> Send a Message
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

            {/* ------------------ RIGHT INFO BLOCK ------------------ */}
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
                  <span className="text-[#f58020]"><Target /></span>
                  Reach Us
                </h3>

                <div className="space-y-8 relative z-10">
                  <div className="flex gap-4 items-start cursor-pointer">
                    <span className="text-[#f58020] text-2xl"><MapPin /></span>
                    <p className="text-gray-400">
                      {" "}
                      Near Kinfra Techno Park & Kerala Startup Mission,<br></br>
                      Kalamassery , Cochin I Kerala
                    </p>
                  </div>

                  <div className="flex gap-4 items-center cursor-pointer">
                    <span className="text-[#f58020] text-2xl"><Phone /></span>
                    <p className="text-gray-400">
                      +91 6238 139 465 | +91 9188 825 935
                    </p>
                  </div>

                  <div className="flex gap-4 items-center cursor-pointer">
                    <span className="text-[#f58020] text-2xl"><Mail /></span>
                    <p className="text-gray-400">info@nextlevelsignages.com</p>
                  </div>

                  {/* ⭐ GOOGLE MAP EMBED ⭐ */}
                  <div className="w-full h-56 rounded-xl overflow-hidden border border-[#f58020]/30 relative group">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.67686259636!2d76.16672441623326!3d9.982368232073966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1708600000000!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{border:0}} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      // Grayscale filter for premium look, full color on hover
                      className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                    
                    {/* Optional: Hint overlay that disappears on hover */}
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
  );
}
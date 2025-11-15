import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import assests from "../assets/assests";

export default function ContactUsPage() {
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

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* PREMIUM PARALLAX BANNER WITH PARTICLES + TILT TEXT */}
      {/* ------------------------------------------------------ */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">
        {/* Parallax Background */}
        <motion.div style={{ y: bannerY }} className="absolute inset-0">
          <img
            src={assests.bannerImage}
            alt="Contact Banner"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black" />

        {/* FLOATING PARTICLES */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#f58020] rounded-full blur-sm opacity-60"
            initial={{
              x: Math.random() * 1400 - 700,
              y: Math.random() * 400 - 300,
              scale: Math.random() * 0.8 + 0.4,
            }}
            animate={{
              y: ["0%", "-25%", "0%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* TILT-IN CINEMATIC TEXT */}
        <motion.div
          initial={{ opacity: 0, rotateX: 45, y: 50 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <div className="drop-shadow-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide"
            >
              Feel Free To{" "}
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(245,128,32,0.4)",
                    "0 0 25px rgba(245,128,32,0.8)",
                    "0 0 10px rgba(245,128,32,0.4)",
                  ],
                  color: ["#ffffff", "#f58020", "#ffffff"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="text-[#f58020]"
              >
                Contact Us Anytime
              </motion.span>
            </motion.h1>

            {/* Gradient Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.9, duration: 1 }}
              className="h-[4px] mx-auto mt-4 rounded-full bg-gradient-to-r from-[#f58020] to-[#d4550d]"
            />

            {/* Sub-caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="text-gray-200 mt-5 text-base sm:text-lg tracking-wide"
            >
              We are here to help you with all signage needs. Reach out for a free quote.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* MAIN CONTACT SECTION (kept unchanged) */}
      {/* ------------------------------------------------------ */}
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

        {/* Floating Orbs */}
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

        {/* Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent origin-left"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Heading */}
          <div className="mt-20" />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-4xl md:text-6xl font-extrabold">
              Connect with{" "}
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
                Us
              </motion.span>
            </h2>
          </motion.div>

          {/* MAIN 2 COLUMN SECTION (FORM + INFO) */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#f58020]/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-[#0d0d0d] to-black p-8 rounded-2xl border border-[#f58020]/20 backdrop-blur-sm">
                <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
                  <span className="text-[#f58020]">Send a Message</span>
                </h3>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200"
                    />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200"
                    />
                  </div>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    placeholder="Phone Number"
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200"
                  />
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    rows="6"
                    placeholder="Your Message"
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 resize-none"
                  />
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-[#f58020] to-[#d4550d] text-white font-bold rounded-xl shadow-xl group relative overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.div
                      className="absolute inset-0 bg-white/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* INFO BLOCK */}
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
                  <span className="text-[#f58020]">Reach Us</span>
                </h3>
                <div className="space-y-8 relative z-10">
                  <motion.div whileHover={{ x: 10 }} className="flex gap-4 items-start">
                    <span className="text-[#f58020] text-2xl">Location</span>
                    <p className="text-gray-400">
                      123 Business Avenue,<br />
                      Industrial Zone,<br />
                      New Delhi, India
                    </p>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex gap-4 items-center">
                    <span className="text-[#f58020] text-2xl">Phone</span>
                    <p className="text-gray-400">+91 98765 43210</p>
                  </motion.div>
                  <motion.div whileHover={{ x: 10 }} className="flex gap-4 items-center">
                    <span className="text-[#f58020] text-2xl">Email</span>
                    <p className="text-gray-400">info@designphantom.com</p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-full h-56 mt-8 bg-gradient-to-br from-black to-[#0d0d0d] border border-[#f58020]/30 rounded-xl flex items-center justify-center text-gray-500 relative overflow-hidden cursor-pointer group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f58020]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 text-lg font-semibold">View Map</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Fade */}
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
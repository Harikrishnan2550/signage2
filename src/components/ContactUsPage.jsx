import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ContactUsPage() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative w-full bg-black text-gray-300 py-24 px-6 md:px-16 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-red-600/15 rounded-full blur-3xl"
      />

      {/* Red Accent Line with Animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-red-600 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-white text-4xl md:text-6xl font-extrabold"
          >
            Connect with <motion.span 
              className="text-red-600"
              animate={{ textShadow: ["0 0 20px rgba(220,38,38,0.5)", "0 0 40px rgba(220,38,38,0.8)", "0 0 20px rgba(220,38,38,0.5)"] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Us
            </motion.span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto leading-relaxed"
          >
            We are here to help you with all signage needs. Reach out for a free quote.
          </motion.p>
        </motion.div>

        {/* Main Layout */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-[#0d0d0d] to-black p-8 rounded-2xl border border-red-600/20 backdrop-blur-sm">
              <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3">
                <span className="text-red-600">✉️</span>
                Send a Message
              </h3>

              <div className="space-y-6">
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" }}
                    transition={{ duration: 0.2 }}
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-red-600/50 transition-all"
                  />

                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" }}
                    transition={{ duration: 0.2 }}
                    type="email"
                    placeholder="Email"
                    className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-red-600/50 transition-all"
                  />
                </div>

                {/* Phone */}
                <motion.input
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" }}
                  transition={{ duration: 0.2 }}
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-red-600/50 transition-all"
                />

                {/* Message */}
                <motion.textarea
                  whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(220, 38, 38, 0.3)" }}
                  transition={{ duration: 0.2 }}
                  rows="6"
                  placeholder="Your Message"
                  className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200 placeholder:text-gray-600 focus:outline-none focus:border-red-600/50 transition-all resize-none"
                ></motion.textarea>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 40px rgba(220, 38, 38, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-xl shadow-2xl shadow-red-600/30 transition-all relative overflow-hidden group"
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

          {/* CONTACT INFO CARD */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-l from-red-600/20 to-transparent rounded-2xl blur-xl opacity-50"></div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-gradient-to-br from-[#0d0d0d] to-black p-8 rounded-2xl border border-red-600/20 shadow-2xl backdrop-blur-sm h-full"
            >
              <div className="absolute inset-0 bg-red-600/5 blur-2xl opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <h3 className="text-white text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                <span className="text-red-600">🎯</span>
                Reach Us
              </h3>

              <div className="space-y-8 relative z-10">
                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-start group cursor-pointer"
                >
                  <span className="text-red-600 text-2xl group-hover:scale-110 transition-transform">📍</span>
                  <div>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                      123 Business Avenue,<br />
                      Industrial Zone,<br />
                      New Delhi, India
                    </p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-center group cursor-pointer"
                >
                  <span className="text-red-600 text-2xl group-hover:scale-110 transition-transform">📞</span>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors">+91 98765 43210</p>
                </motion.div>

                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-4 items-center group cursor-pointer"
                >
                  <span className="text-red-600 text-2xl group-hover:scale-110 transition-transform">✉️</span>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors">info@designphantom.com</p>
                </motion.div>

                {/* Map Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="w-full h-56 mt-8 bg-gradient-to-br from-black to-[#0d0d0d] border border-red-600/30 rounded-xl flex items-center justify-center text-gray-500 overflow-hidden relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 text-lg font-semibold">📍 View Map</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-black via-black/50 to-transparent"
      />
    </motion.section>
  );
}
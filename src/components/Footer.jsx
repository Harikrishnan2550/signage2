import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-300 pt-8 pb-10 px-6 md:px-16 border-t border-white/10">

      {/* Top Orange Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#f58020]/60"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white text-xl font-bold">About Next Level Signages</h2>
          <p className="text-gray-400 mt-3 leading-relaxed">
            We are a top signage and branding company in Kochi. We make high-quality signs for all kinds of businesses. We focus on great designs and lasting results to make your brand stand out.
          </p>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {["Home", "About", "Services", "Gallery", "Contact"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 6, color: "#f58020" }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer text-gray-400 hover:text-[#f58020]"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
          <ul className="space-y-4 text-gray-400">
            <li>📍 Kochi, Kerala</li>
            <li>📞 +91 98765 43210</li>
            <li>✉️ info@designphantom.com</li>
          </ul>
        </motion.div>

        {/* SOCIAL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-5 text-gray-400">
            {["Instagram", "Facebook", "LinkedIn"].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -4, scale: 1.1, color: "#f58020" }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer"
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="w-full h-[1px] bg-white/10 my-10"></div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Winshine infotech — All Rights Reserved.
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-black to-transparent"></div>
    </footer>
  );
}

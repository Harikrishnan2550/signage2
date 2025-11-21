import { motion } from "framer-motion";
import { MdShareLocation } from "react-icons/md";
import { MdPhoneCallback } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";
import assests from "../assets/assests"; 

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-gray-300 pt-10 pb-10 px-6 md:px-16 border-t border-white/10">

      {/* Top Orange Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#f58020]/60"></div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 items-start">

        {/* --- COLUMN 1: BRAND & LOGO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* LOGO - Acts as the main header for this column */}
          {/* 'mb-5' gives just enough space before the text starts */}
          <img 
            src={assests.logo} 
            alt="Next Level Signages Logo" 
            className="w-40 object-contain -ml-5 -mt-12" 
          />
          {/* Added -ml-2 above to pull logo slightly left to align visually with text if the logo image has built-in padding */}

          
          <p className="text-gray-400 text-sm leading-relaxed text-left max-w-xs -mt-7">
            We are a top signage and branding company in Kochi. We make high-quality signs for all kinds of businesses. We focus on great designs and lasting results.
          </p>
        </motion.div>

        {/* --- COLUMN 2: QUICK LINKS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <h3 className="text-white text-lg font-bold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-sm">
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

        {/* --- COLUMN 3: CONTACT INFO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h3 className="text-white text-lg font-bold mb-5">Contact</h3>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex gap-3 items-start">
              <MdShareLocation className="text-[24px] text-[#f58020] flex-shrink-0" /> 
              <span> 
                Near Kinfra Techno Park &<br/> Kerala Startup Mission<br/>
                Kalamassery, Cochin | Kerala
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MdPhoneCallback className="text-[20px] text-[#f58020] flex-shrink-0" /> 
              +91 98765 43210 
            </li>
            <li className="flex gap-3 items-center">
              <IoMailUnreadOutline className="text-[20px] text-[#f58020] flex-shrink-0" /> 
              info@designphantom.com
            </li>
          </ul>
        </motion.div>

        {/* --- COLUMN 4: SOCIAL LINKS --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h3 className="text-white text-lg font-bold mb-5">Follow Us</h3>
          <div className="flex flex-col gap-3 text-sm text-gray-400">
            {["Instagram", "Facebook", "LinkedIn"].map((item, i) => (
              <motion.span
                key={i}
                whileHover={{ x: 4, color: "#f58020" }}
                transition={{ duration: 0.2 }}
                className="cursor-pointer hover:text-[#f58020]"
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
        className="text-center text-gray-500 text-sm relative z-10"
      >
        © {new Date().getFullYear()} Winshine infotech — All Rights Reserved.
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-[80px] bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </footer>
  );
}
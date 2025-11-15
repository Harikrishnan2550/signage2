// import { useState, useEffect } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
// import assests from "../assets/assests";

// export default function Navbar({ onNav, route }) {
//   const [open, setOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const { scrollY } = useScroll();

//   // Detect mobile size
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Scroll background animation
//   const navbarBg = useTransform(
//     scrollY,
//     [0, 100],
//     ["rgba(0,0,0,0)", "rgba(0,0,0,0.35)"]
//   );

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = ["home", "about", "services", "gallery", "contact"];

//   const linkClass = (r) =>
//     `relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
//       route === r ? "text-red-500" : "text-gray-200 hover:text-white"
//     }`;

//   return (
//     <motion.header
//       className="fixed top-0 left-0 w-full z-[999]"
//       initial={{ y: -100, opacity: 0 }}
//       animate={{ y: 0, opacity: 1 }}
//       transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
//     >
//       {/* Apply blur ONLY in mobile */}
//       {isMobile && (
//         <motion.div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background: open
//               ? "rgba(255,255,255,0.06)"
//               : scrolled
//               ? "rgba(0,0,0,0.3)"
//               : navbarBg,
//             backdropFilter: "blur(18px) saturate(180%)",
//             WebkitBackdropFilter: "blur(18px) saturate(180%)",
//             borderBottom: "1px solid rgba(255,255,255,0.15)",
//             zIndex: 0,
//           }}
//         />
//       )}

//       {/* NAVIGATION CONTENT */}
//       <div className="relative z-[1000]">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-2 py-3 md:py-4">

//           {/* LOGO */}
//           <motion.div
//             onClick={() => {
//               onNav("home");
//               setOpen(false);
//             }}
//             className="flex items-center gap-3 cursor-pointer"
//             whileHover={{ scale: 1.02 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <img
//               src={assests.logo}
//               alt="Logo"
//               className="w-[180px] sm:w-[220px] md:w-[235px] h-12 sm:h-14 md:h-16 object-cover rounded-xl ring-2 ring-white/10"
//             />
//           </motion.div>

//           {/* DESKTOP MENU (unchanged animations) */}
//           <nav className="hidden md:flex items-center gap-1">
//             {navItems.map((item, i) => (
//               <motion.button
//                 key={item}
//                 className={linkClass(item)}
//                 onClick={() => onNav(item)}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="relative z-10">
//                   {item.charAt(0).toUpperCase() + item.slice(1)}
//                 </span>

//                 {/* Active tab highlight */}
//                 {route === item && (
//                   <motion.div
//                     layoutId="activeTab"
//                     className="absolute inset-0 bg-red-600/10 rounded-lg border border-red-500/40 shadow-red-500/20"
//                     transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
//                   />
//                 )}
//               </motion.button>
//             ))}
//           </nav>

//           {/* DESKTOP CTA */}
//           <motion.button
//             onClick={() => onNav("contact")}
//             className="hidden md:flex px-5 py-2.5 bg-red-600 text-white rounded-lg font-semibold shadow-red-600/40"
//             whileHover={{ scale: 1.05 }}
//           >
//             Connect →
//           </motion.button>

//           {/* MOBILE HAMBURGER */}
//           <motion.button
//             className="md:hidden relative w-10 h-10 flex items-center justify-center text-white z-[2000]"
//             onClick={() => setOpen(!open)}
//             whileTap={{ scale: 0.9 }}
//           >
//             <div className="w-6 h-5 flex flex-col justify-between">
//               <motion.span
//                 className="w-full h-0.5 bg-white rounded-full"
//                 animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
//               />
//               <motion.span
//                 className="w-full h-0.5 bg-white rounded-full"
//                 animate={open ? { opacity: 0 } : { opacity: 1 }}
//               />
//               <motion.span
//                 className="w-full h-0.5 bg-white rounded-full"
//                 animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
//               />
//             </div>
//           </motion.button>
//         </div>

//         {/* MOBILE MENU WITH SLIDE-UP ITEMS */}
//         {open && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", damping: 30, stiffness: 300 }}
//             className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] z-[1500] bg-black/60 backdrop-blur-2xl border-l border-white/20 p-8 pt-24"
//           >
//             {navItems.map((item, i) => (
//               <motion.button
//                 key={item}
//                 className="text-left text-gray-200 hover:text-white text-lg font-medium py-3 w-full"
//                 onClick={() => {
//                   onNav(item);
//                   setOpen(false);
//                 }}
//                 initial={{ opacity: 0, y: 40 }} // Slide-up animation
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.08, duration: 0.4 }}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </motion.button>
//             ))}

//             <motion.button
//               onClick={() => {
//                 onNav("contact");
//                 setOpen(false);
//               }}
//               className="mt-10 w-full py-3 bg-red-600 rounded-lg text-white font-semibold"
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5, duration: 0.4 }}
//               whileHover={{ scale: 1.03 }}
//             >
//               Connect →
//             </motion.button>
//           </motion.div>
//         )}
//       </div>
//     </motion.header>
//   );
// }




// src/components/Navbar.jsx

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import assests from "../assets/assests";
import emailjs from "@emailjs/browser";

export default function Navbar({ onNav, route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showModal, setShowModal] = useState(false);

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  /* Mobile resize detect */
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Scroll detect */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "services", "gallery", "contact"];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_a7bvb6d",
        "template_wx9e8jt",
        formRef.current,
        "L8a-1dhEPat8PUQN8"
      )
      .then(() => {
        alert("Message sent successfully!");
        setLoading(false);
        formRef.current.reset();
        setShowModal(false);
      })
      .catch(() => {
        alert("Failed to send. Try again.");
        setLoading(false);
      });
  };

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[999]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="origin-left fixed top-0 left-0 right-0 h-[3px] bg-[#f58020] z-[2000]"
      />

      {/* Background Blur */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-all duration-500"
        style={{
          background: scrolled ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0)",
          backdropFilter: scrolled ? "blur(18px) saturate(180%)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.15)"
            : "transparent",
          zIndex: 0,
        }}
      />

      <div className="relative z-[1000]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-4 py-3 md:py-4">

          {/* LOGO */}
          <motion.div
            onClick={() => {
              onNav("home");
              setOpen(false);
            }}
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={assests.logo}
              alt="Logo"
              className="w-[180px] sm:w-[220px] md:w-[235px] h-12 sm:h-14 md:h-16 object-cover rounded-xl"
            />
          </motion.div>

          {/* ================= DESKTOP NAV ================= */}
          <div className="hidden md:flex items-center gap-4 relative">

            {/* ❌ REMOVED the wrong outer highlight here */}

            {navItems.map((item, i) => {
              const isActive = route === item;

              return (
                <motion.button
                  key={item}
                  onClick={() => onNav(item)}
                  className="relative px-4 py-2 text-sm font-semibold text-gray-200 hover:text-white transition-all"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* ACTIVE GLOWING BORDER (correct one) */}
                  {isActive && (
                    <motion.div
                      layoutId="navBorderBox"
                      className="absolute inset-0 rounded-lg border-[2px] border-[#f58020] shadow-[0_0_15px_#f58020] z-[-1]"
                      transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    />
                  )}

                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              );
            })}
          </div>

          {/* DESKTOP CONNECT BUTTON */}
          <motion.button
            onClick={() => setShowModal(true)}
            className="hidden md:flex px-5 py-2.5 bg-gradient-to-r from-[#f58020] to-red-700 text-white rounded-lg font-semibold"
            whileHover={{ scale: 1.05 }}
          >
            Connect →
          </motion.button>

          {/* MOBILE MENU BUTTON */}
          <motion.button
            className="md:hidden relative w-10 h-10 text-white flex items-center justify-center"
            onClick={() => setOpen(!open)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white"
                animate={open ? { rotate: 45, y: 9 } : { rotate: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white"
                animate={{ opacity: open ? 0 : 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white"
                animate={open ? { rotate: -45, y: -9 } : { rotate: 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* MOBILE DRAWER */}
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            className="
              fixed right-0 top-[72px] bottom-[380px]
              w-[280px] sm:w-[320px]
              bg-black/60 backdrop-blur-2xl
              border-l border-white/20 rounded-xl
              p-8 z-[1500]
              flex flex-col items-center gap-5
            "
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                onClick={() => {
                  onNav(item);
                  setOpen(false);
                }}
                className="text-gray-200 text-lg py-3 w-full text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}

            {/* MOBILE CONNECT */}
            <motion.button
              onClick={() => {
                setShowModal(true);
                setOpen(false);
              }}
              className="w-full py-3 bg-gradient-to-r from-[#f58020] to-red-700 rounded-lg text-white font-semibold"
            >
              Connect →
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* CONTACT MODAL */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center px-4 z-[5000]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            className="relative max-w-lg w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-white text-2xl"
            >
              ✕
            </button>

            <h2 className="text-white text-3xl font-bold text-center mb-6">
              Connect With <span className="text-[#f58020]">Us</span>
            </h2>

            <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
              <input name="name" required placeholder="Full Name" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200" />
              <input name="email" required type="email" placeholder="Email" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200" />
              <input name="phone" required placeholder="Phone Number" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200" />

              <select name="service" required className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-300">
                <option value="">Select Service</option>
                <option>Frontage Signages</option>
                <option>Interior Signages</option>
                <option>Wall & Glass Branding</option>
                <option>Directional Signages</option>
                <option>Laser & CNC Cutting</option>
              </select>

              <textarea name="message" rows="4" required placeholder="Your Message" className="w-full p-4 bg-black/50 border border-white/10 rounded-xl text-gray-200" />

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                className="w-full py-4 bg-gradient-to-r from-[#f58020] to-red-700 rounded-xl text-white font-semibold"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </motion.header>
  );
}

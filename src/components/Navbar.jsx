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




import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import assests from "../assets/assests";

export default function Navbar({ onNav, route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();

  // Scroll progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Detect mobile screen
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect scroll amount for desktop blur
  useEffect(() => {
    const handleScroll = () => {
      // If scroll > 80px → blur should appear on desktop
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "services", "gallery", "contact"];

  const linkClass = (r) =>
    `relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      route === r ? "text-[#f58020]" : "text-gray-200 hover:text-white"
    }`;

  return (
    <motion.header
      className="fixed top-0 left-0 w-full z-[999]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* SCROLL INDICATOR */}
      <motion.div
        style={{ scaleX }}
        className="origin-left fixed top-0 left-0 right-0 h-[3px] bg-[#f58020] z-[2000]"
      />

      {/* ░░░ BACKGROUND LAYER (MOBILE + DESKTOP LOGIC SEPARATE) ░░░ */}
      {!isMobile ? (
        // DESKTOP: Blur only AFTER Hero Section
        <motion.div
          className="absolute inset-0 pointer-events-none transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(0,0,0,0.45)"
              : "rgba(0,0,0,0)", // Home section = no blur
            backdropFilter: scrolled ? "blur(18px) saturate(180%)" : "none",
            WebkitBackdropFilter: scrolled
              ? "blur(18px) saturate(180%)"
              : "none",
            borderBottom: scrolled
              ? "1px solid rgba(255,255,255,0.15)"
              : "transparent",
            zIndex: 0,
          }}
        />
      ) : (
        // MOBILE: Always follow your original logic
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: open
              ? "rgba(255,255,255,0.06)"
              : scrolled
              ? "rgba(0,0,0,0.3)"
              : "rgba(0,0,0,0)",
            backdropFilter: "blur(18px) saturate(180%)",
            WebkitBackdropFilter: "blur(18px) saturate(180%)",
            borderBottom: "1px solid rgba(255,255,255,0.15)",
            zIndex: 0,
          }}
        />
      )}

      {/* MAIN NAV BAR */}
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
            whileTap={{ scale: 0.98 }}
          >
            <img
              src={assests.logo}
              alt="Logo"
              className="w-[180px] sm:w-[220px] md:w-[235px] h-12 sm:h-14 md:h-16 object-cover rounded-xl"
            />
          </motion.div>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                className={linkClass(item)}
                onClick={() => onNav(item)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>

                {route === item && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#f58020]/10 rounded-lg border border-[#f58020]/40 shadow-[#f58020]/20"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <motion.button
            onClick={() => onNav("contact")}
            className="hidden md:flex px-5 py-2.5 bg-gradient-to-r from-[#f58020] to-red-700 text-white rounded-lg font-semibold shadow-[#f58020]/40"
            whileHover={{ scale: 1.05 }}
          >
            Connect →
          </motion.button>

          {/* MOBILE HAMBURGER */}
          <motion.button
            className="md:hidden relative w-10 h-10 flex items-center justify-center text-white z-[2000]"
            onClick={() => setOpen(!open)}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-full h-0.5 bg-white rounded-full"
                animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* MOBILE DRAWER */}
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="
              fixed right-0 
              top-[72px] bottom-[380px]
              w-[280px] sm:w-[320px] 
              z-[1500] 
              bg-black/60 
              backdrop-blur-2xl 
              border-l border-white/20 
              p-8 
              rounded-xl
              flex flex-col items-center justify-center gap-4
            "
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item}
                className="text-center text-gray-200 hover:text-white text-lg font-medium py-3 w-full"
                onClick={() => {
                  onNav(item);
                  setOpen(false);
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.button>
            ))}

            <motion.button
              onClick={() => {
                onNav("contact");
                setOpen(false);
              }}
              className="mt-10 w-full py-3 bg-gradient-to-r from-[#f58020] to-red-700 rounded-lg text-white font-semibold"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.03 }}
            >
              Connect →
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

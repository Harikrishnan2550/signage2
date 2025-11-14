import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import assests from "../assets/assests";

export default function Navbar({ onNav, route }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Dynamic background: transparent -> solid with blur on scroll
  const navbarBg = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.85)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (r) =>
    `relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      route === r ? "text-red-500" : "text-gray-200 hover:text-white"
    }`;

  const navItems = ["home", "about", "services", "gallery", "contact"];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ backgroundColor: open ? "rgba(0, 0, 0, 1)" : navbarBg }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        open || scrolled
          ? "backdrop-blur-xl border-b border-white/20 shadow-2xl shadow-black/50"
          : "border-b border-white/0"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 md:py-4">
        {/* LOGO */}
        <motion.div
          onClick={() => {
            onNav("home");
            setOpen(false);
          }}
          className="flex items-center gap-3 cursor-pointer relative z-50"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-lg"
            whileHover={{ rotate: [0, -1, 1, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={assests.logo}
              alt="Premium Signage"
              className="w-[180px] sm:w-[220px] md:w-[235px] h-12 sm:h-14 md:h-16 object-cover rounded-xl ring-2 ring-white/10"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </motion.div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <motion.button
              key={item}
              className={linkClass(item)}
              onClick={() => onNav(item)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 tracking-wide">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </span>
              {route === item && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-red-600/10 rounded-lg border border-red-500/40 shadow-lg shadow-red-500/20"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* CTA BUTTON */}
        <motion.button
          onClick={() => onNav("contact")}
          className="hidden md:flex items-center gap-2 relative px-5 py-2.5 bg-gradient-to-r from-red-600 via-red-600 to-red-700 font-bold text-white text-sm rounded-lg overflow-hidden group shadow-lg shadow-red-600/30"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(220, 38, 38, 0.6)",
          }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="relative z-10 tracking-wide">Connect With Us</span>
          <motion.span
            className="relative z-10"
            animate={{ x: [0, 3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            →
          </motion.span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-700 via-red-800 to-red-900"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.button>

        {/* MOBILE MENU TOGGLE */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center text-white z-50"
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <motion.span
              className="w-full h-0.5 bg-white rounded-full shadow-sm"
              animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full shadow-sm"
              animate={open ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-full h-0.5 bg-white rounded-full shadow-sm"
              animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] bg-gradient-to-br from-gray-900 via-black to-gray-900 z-40 md:hidden shadow-2xl border-l border-white/10"
          >
            {/* Mobile menu header decoration */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600"></div>

            <nav className="flex flex-col px-6 py-24 gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  className={`${linkClass(
                    item
                  )} text-left rounded-lg py-3 px-4`}
                  onClick={() => {
                    onNav(item);
                    setOpen(false);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * i,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    x: 8,
                    backgroundColor: "rgba(220, 38, 38, 0.15)",
                    borderLeft: "3px solid rgb(220, 38, 38)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-base tracking-wide">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                </motion.button>
              ))}

              <motion.button
                onClick={() => {
                  onNav("contact");
                  setOpen(false);
                }}
                className="mt-8 px-6 py-3.5 bg-gradient-to-r from-red-600 to-red-700 font-bold text-white text-sm rounded-lg shadow-lg shadow-red-600/40 flex items-center justify-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(220, 38, 38, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Connect With Us</span>
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </nav>

            {/* Decorative element */}
            <div className="absolute bottom-8 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </motion.div>
        </>
      )}
    </motion.header>
  );
}

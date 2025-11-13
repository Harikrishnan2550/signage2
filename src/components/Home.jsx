import { motion, useScroll, useTransform } from "framer-motion";
import assests from "../assets/assests"; // Your assets import

export default function Home({ onNav }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="w-full min-h-screen relative overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <motion.div 
        className="absolute inset-0"
        style={{ y }}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={assests.banner} type="video/mp4" />
        </video>
      </motion.div>

      {/* ENHANCED GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>
      
      {/* ANIMATED GRID OVERLAY */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* CONTENT */}
      <motion.div 
        className="relative z-10 h-screen flex flex-col justify-center  max-w-6xl mx-auto"
        style={{ opacity }}
      >

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          
        </motion.div>

        {/* HEADING */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight mt-24"
        >
          <span className="inline-block">Premium</span>{" "}
          <motion.span 
            className="inline-block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            Signage
          </motion.span>
          <br />
          <span className="inline-block">Solutions</span>
          <br />
          <span className="text-4xl md:text-5xl font-light text-gray-300">
            Crafted With Precision
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-6 text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          We create premium signage that elevates your brand presence.
          From design to installation — complete end-to-end solutions.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.button 
            onClick={() => onNav("contact")}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm rounded-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button 
            onClick={() => onNav("gallery")}
            className="group px-8 py-4 border-2 border-gray-600 text-gray-300 hover:border-red-500 hover:text-white font-semibold text-sm rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(220, 38, 38, 0.1)" }}
            whileTap={{ scale: 0.98 }}
          >
            View Portfolio
            <motion.span
              className="inline-block ml-2"
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 45 }}
              transition={{ duration: 0.3 }}
            >
              ↗
            </motion.span>
          </motion.button>
        </motion.div>

        {/* STATS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-16 flex flex-wrap gap-12"
        >
        </motion.div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-gray-400 text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-[2px] h-10 bg-gradient-to-b from-red-600 to-transparent rounded-full"
        />
      </motion.div>
    </section>
  );
}
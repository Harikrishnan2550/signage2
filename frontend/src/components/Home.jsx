import { motion, useScroll, useTransform } from "framer-motion";
import assests from "../assets/assests";
import { useState, useEffect } from "react";
import { Send, ArrowUpRight } from "lucide-react";
import { HeadProvider, Title, Meta } from "react-head";   // ✅ SEO IMPORT

export default function Home({ onNav }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const line2 = "Your Signage Partner";

  // Typing effect states
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [completedTyping, setCompletedTyping] = useState(false);

  useEffect(() => {
    if (completedTyping) return;

    if (index < line2.length) {
      const timeout = setTimeout(() => {
        setTyped(line2.substring(0, index + 1));
        setIndex(index + 1);
      }, 90);
      return () => clearTimeout(timeout);
    } else {
      setCompletedTyping(true);
    }
  }, [index, completedTyping]);

  return (
    <HeadProvider>
      {/* 🔥 SEO META TAGS (Works per page) */}
      <Title>
        Next Level Signages Kochi | Premium Indoor & Outdoor Signage Solutions
      </Title>
      <Meta
        name="description"
        content="Next Level Signages is the best in Kochi for signs and branding. We offer LED signs, acrylic letters, and more. Our designs are top-notch, and we install them professionally for lasting results."
      />

      {/* 🔽 No UI changes — original code below */}
      <section className="w-full min-h-screen relative overflow-hidden">

        {/* VIDEO BACKGROUND */}
        <motion.div className="absolute inset-0" style={{ y }}>
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

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>

        {/* GRID LINES */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* MAIN CONTENT */}
        <motion.div
          className="relative z-10 min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-0 lg:ml-[120px]"
          style={{ opacity }}
        >
          <div className="mt-20 sm:mt-24 md:mt-28"></div>

          {/* HEADING */}
          <div className="text-white max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-start"
            >
              <img
                src={assests.logo2}
                alt="Company Logo"
                className="h-16 sm:h-20 md:h-24 lg:h-24 w-auto object-contain -ml-[50px] lg:-ml-[120px]"
              />
            </motion.div>

            <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight -mt-2 sm:-mt-3 lg:-mt-0">
              <span className="relative inline-block select-none">
                <span
                  className="block"
                  style={{
                    WebkitTextFillColor: "transparent",
                    WebkitTextStroke: "1px rgba(255,255,255,0.7)",
                    textShadow: `
                      0 3px 4px rgba(0,0,0,0.8),
                      0 8px 14px rgba(0,0,0,0.65),
                      0 18px 32px rgba(0,0,0,0.55),
                      inset 0 2px 6px rgba(255,255,255,0.45),
                      inset 0 -4px 8px rgba(255,255,255,0.12),
                      0 0 18px rgba(255,255,255,0.25),
                      0 0 38px rgba(255,255,255,0.18)
                    `,
                    filter: `
                      drop-shadow(0 4px 26px rgba(0,0,0,0.75))
                      drop-shadow(0 0 36px rgba(255,255,255,0.15))
                    `,
                  }}
                >
                  {typed}
                </span>

                {completedTyping && (
                  <motion.span
                    className="absolute inset-0 pointer-events-none"
                    animate={{ backgroundPosition: ["-350% 0", "350% 0"] }}
                    transition={{
                      duration: 4.8,
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      ease: "easeInOut",
                    }}
                    style={{
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundImage: `
                        linear-gradient(
                          100deg,
                          rgba(0,0,0,0) 0%,
                          rgba(0,0,0,0) 32%,
                          #3e1d02 44%, 
                          #8f4a10 48%, 
                          #f58020 52%, 
                          #ffb04d 54%, 
                          #f58020 56%, 
                          #8f4a10 60%,
                          #3e1d02 64%,
                          rgba(0,0,0,0) 78%,
                          rgba(0,0,0,0) 100%
                        )
                      `,
                      backgroundSize: "350% 100%",
                      filter: `
                        drop-shadow(0 0 38px rgba(245,128,32,0.55))
                        drop-shadow(0 0 68px rgba(245,128,32,0.45))
                        drop-shadow(0 0 110px rgba(245,128,32,0.25))
                      `,
                      mixBlendMode: "screen",
                    }}
                  >
                    {typed}
                  </motion.span>
                )}
              </span>
            </h1>
          </div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: completedTyping ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="block text-2xl sm:text-3xl md:text-4xl font-light text-gray-300"
          >
            Advanced Technology. Expert Craftsmanship.
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: completedTyping ? 1 : 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            We make top-notch signs for inside and outside. They make your brand
            look better. We handle everything from start to finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: completedTyping ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <motion.button
              onClick={() => onNav("contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-[#f58020] to-[#d4550d] text-white font-bold shadow-[0_0_30px_rgba(245,128,32,0.4)] hover:shadow-[0_0_50px_rgba(245,128,32,0.6)] transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden"
            >
              <span className="relative z-10 tracking-wide">Get a Quote</span>
              <div className="relative z-10 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-[#f58020] transition-colors duration-300">
                <Send size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-in-out" />
            </motion.button>

            <motion.button
              onClick={() => onNav("gallery")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto px-5 py-3 rounded-xl border border-white/20 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-3"
            >
              <span className="tracking-wide">View Portfolio</span>
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:rotate-45" />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
    </HeadProvider>
  );
}

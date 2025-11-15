import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Award, Users, Clock } from "lucide-react";
import { useRef } from "react";
import assests from "../assets/assests";

export default function AboutUsPage() {

  /* ---------------- BANNER ANIMATION ---------------- */
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 300], [0, 120]);

  /* ---------------- SECTION ANIMATION ---------------- */
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  /* ---------------- CONTENT DATA ---------------- */
  const features = [
    "End-to-end service — design, printing & installation",
    "High-grade materials and long-lasting finish",
    "Custom signage for all industries",
    "On-time delivery and professional installation",
  ];

  const stats = [
    { icon: Award, value: "500+", label: "Projects Delivered" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Clock, value: "15+", label: "Years Experience" },
  ];

  const founders = [
    {
      name: "SHIFFIL MOHAMMED",
      title: "Founder & Managing Director",
      image: assests.founder1,
      quotes: [
        "We started it with a dream fulfillment... and now it is growing with a great team & vision",
        "For us, every single signage project is a chance to make a positive impact on your brand.",
        "We don't just make signages — we create brand statements.",
      ],
    },
    {
      name: "FAHAD",
      title: "Co-Founder & Director",
      image: assests.founder2,
      quotes: [
        "Every signage we make carries your vision and our dedication.",
        "From bold ideas to brilliant signages.",
      ],
    },
  ];

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* 🔥 PREMIUM BANNER SECTION WITH CAPTION */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">

        {/* Banner Background */}
        <motion.div
          style={{ y: bannerY }}
          className="absolute inset-0"
        >
          <img
            src={assests.bannerImage}
            alt="Banner"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black"></div>

        {/* ⭐ PREMIUM CAPTION TEXT ⭐ */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-xl"
            >
              Crafting Signages That Define Your Brand
            </motion.h1>

            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="h-[4px] bg-gradient-to-r from-[#f58020] to-[#d4550d] mx-auto mt-4 rounded-full shadow-xl"
            />

            {/* Sub caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-gray-200 mt-5 text-base sm:text-lg tracking-wide"
            >
              Premium designs. Superior quality. Professional installation.
            </motion.p>
          </div>
        </motion.div>

      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔥 ABOUT PAGE CONTENT */}
      {/* ---------------------------------------------------- */}
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="relative w-full bg-black text-gray-300 py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >

        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        {/* Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#f58020]/5 rounded-full blur-3xl"></div>

        {/* Top Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent"
        />

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f58020]/10 border border-[#f58020]/30 text-[#f58020] rounded-full text-xs font-semibold backdrop-blur-sm">
            <span className="w-2 h-2 bg-[#f58020] rounded-full animate-pulse"></span>
            About Our Company
          </span>
        </motion.div>

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <motion.div
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -inset-4 bg-gradient-to-r from-[#f58020]/20 to-[#d4550d]/20 blur-3xl rounded-2xl"
            />

            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=900&q=80"
                  className="w-full h-[380px] sm:h-[470px] lg:h-[560px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-[#f58020] via-[#d4550d] to-red-700 bg-clip-text text-transparent">
                Design Phantom
              </span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              We deliver premium signage, branding, CNC/laser cutting, and illuminated boards across
              various sectors with consistent quality, precision and trust.
            </p>

            {/* FEATURES */}
            <div className="space-y-4">
              {features.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#f58020] to-[#d4550d] rounded-full flex items-center justify-center shadow-lg text-white text-[10px]">
                    <Check size={14} />
                  </span>
                  <p className="text-gray-300 text-sm sm:text-base">{text}</p>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-gradient-to-br from-gray-900 to-black border border-white/10 p-4 rounded-xl text-center hover:border-[#f58020]/40 transition"
                  >
                    <Icon className="text-[#f58020] w-6 h-6 mx-auto mb-2" />
                    <h4 className="text-white text-xl font-bold">{stat.value}</h4>
                    <p className="text-xs text-gray-400">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>

        {/* FOUNDERS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mt-24 md:mt-32"
        >
          <h3 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">
            Meet Our <span className="text-[#f58020]">Founders</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-stretch">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group h-full"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-[#f58020]/20 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition"></div>

                <div className="relative bg-gradient-to-br from-[#0d0d0d] to-black border border-white/10 rounded-2xl p-8 shadow-xl hover:border-[#f58020]/50 transition flex flex-col h-full">
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full border-4 border-[#f58020] overflow-hidden"
                  >
                    <img src={founder.image} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40"></div>
                  </motion.div>

                  <div className="text-center mb-6">
                    <h4 className="text-white text-2xl font-bold">{founder.name}</h4>
                    <p className="text-gray-400 italic">{founder.title}</p>
                    <div className="mt-3 h-1 w-20 bg-[#f58020] mx-auto rounded-full"></div>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <div className="space-y-6 px-3">
                      {founder.quotes.map((quote, qIndex) => (
                        <motion.p
                          key={qIndex}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: qIndex * 0.15 }}
                          className="text-gray-200 text-lg leading-relaxed italic text-center"
                        >
                          “{quote}”
                        </motion.p>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black"></div>

      </motion.section>
    </>
  );
}

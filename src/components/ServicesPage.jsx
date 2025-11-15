import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Palette,
  Box,
  MapPin,
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
import { useRef } from "react";
import assests from "../assets/assests";

export default function ServicesPage() {
  /* Banner Scroll Animation */
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 300], [0, 120]);

  /* Content Animation */
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  /* ⭐ UPDATED CLIENT SERVICES */
  const serviceList = [
    {
      title: "Frontage Signages",
      desc: "Premium outdoor storefront signage that enhances brand visibility and creates a powerful first impression.",
      icon: Building2,
      gradient: "from-[#f58020] to-[#d4550d]",
      glow: "[#f58020]"
    },
    {
      title: "Interior Signages",
      desc: "Elegant and modern indoor signage solutions crafted to elevate commercial interiors and retail brand identity.",
      icon: Palette,
      gradient: "from-[#f58020] to-[#d4550d]",
      glow: "[#f58020]"
    },
    {
      title: "Wall & Glass Branding",
      desc: "High-quality vinyl prints, frosting, and branding solutions designed for office walls and glass partitions.",
      icon: Box,
      gradient: "from-[#f58020] to-[#d4550d]",
      glow: "[#f58020]"
    },
    {
      title: "Directional Signages",
      desc: "Navigation & wayfinding signages for malls, offices, showrooms, institutes, and large commercial spaces.",
      icon: MapPin,
      gradient: "from-[#f58020] to-[#d4550d]",
      glow: "[#f58020]"
    },
    {
      title: "Laser & CNC Cutting",
      desc: "Precision laser and CNC cutting for acrylic, ACP, MDF, metal, and other materials with smooth finishing.",
      icon: Zap,
      gradient: "from-[#f58020] to-[#d4550d]",
      glow: "[#f58020]"
    }
  ];

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* 🔥 PREMIUM PARALLAX BANNER WITH CAPTION */}
      {/* ------------------------------------------------------ */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">

        <motion.div
          style={{ y: bannerY }}
          className="absolute inset-0"
        >
          <img
            src={assests.bannerImage}
            alt="Services Banner"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>

        {/* Black Soft Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>

        {/* ⭐ PREMIUM CAPTION ⭐ */}
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
              Discover Our Professional Signage Solutions
            </motion.h1>

            {/* Underline Animation */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "140px" }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              className="h-[4px] bg-gradient-to-r from-[#f58020] to-[#d4550d] mx-auto mt-4 rounded-full"
            />

            {/* Sub caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="text-gray-200 mt-5 text-base sm:text-lg tracking-wide"
            >
              From outdoor branding to precision-cut designs — we deliver excellence.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* 🔥 SERVICES CONTENT */}
      {/* ------------------------------------------------------ */}
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="relative w-full bg-black text-gray-300 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        {/* Radial Glows */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#f58020]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#d4550d]/5 rounded-full blur-3xl"></div>

        {/* Top Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent origin-left"
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Section Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f58020]/10 border border-[#f58020]/30 rounded-full text-[#f58020] text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3 h-3" /> What We Offer
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-4"
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Our Premium{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-[#f58020] via-[#d4550d] to-[#d4550d] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Services
              </motion.span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              className="mt-4 h-1 w-32 bg-gradient-to-r from-[#f58020] via-[#d4550d] to-[#f58020] rounded-full mx-auto"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-center text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed px-4"
          >
            High-quality signage and branding solutions crafted with precision,
            innovation, and a commitment to premium finishing.
          </motion.p>

          {/* Service Grid */}
          <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {serviceList.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className="group relative cursor-default"
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition"></div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden h-full"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition`}
                    />

                    {/* Floating Sparks */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                      <motion.div
                        animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute top-1/3 left-1/4 w-2 h-2 bg-${service.glow} rounded-full blur-sm`}
                      />

                      <motion.div
                        animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                        className={`absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-${service.glow} rounded-full blur-sm`}
                      />
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] shadow-lg group-hover:shadow-2xl transition-shadow`}
                    >
                      <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>



                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${service.gradient}`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
      </motion.section>
    </>
  );
}

import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Award, Users, Clock } from "lucide-react";
import { useRef } from "react";
import assests from "../assets/assests";

export default function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const features = [
    "End-to-end solutions — design, fabrication & installation",
    "High-grade materials with long-lasting durability",
    "Custom signage for all industries & business sizes",
    "On-time delivery with professional installation support",
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
        "For us, every single Signage project is a chance to make a positive impact on your brand.",
        "We don't just make Signages, We create Brand Statements",
      ],
    },
    {
      name: "FAHAD",
      title: "Co-Founder & Director",
      image: assests.founder2,
      quotes: [
        "Every signage we make carries your vision and our dedication. Let's keep building together.",
        "From Bold Ideas to Brilliant Signages..",
      ],
    },
  ];

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative w-full bg-black text-gray-300 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* ORANGE RADIAL GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f58020]/5 rounded-full blur-3xl"></div>

      {/* TOP ACCENT LINE */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent origin-left"
      />

      {/* SECTION BADGE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-8 md:mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f58020]/10 border border-[#f58020]/30 rounded-full text-[#f58020] text-xs font-semibold backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#f58020] rounded-full animate-pulse"></span>
          About Our Company
        </span>
      </motion.div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-4 bg-gradient-to-r from-[#f58020]/20 via-[#f58020]/30 to-[#f58020]/20 blur-3xl rounded-2xl"
          />

          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Design Phantom Team"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />

              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT INFO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] leading-snug">
              About{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-[#f58020] via-[#d4550d] to-[#d4550d] bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Next Level Signages
              </motion.span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            We are a Kochi-based premium signage and branding company delivering
            high-quality, performance-driven solutions for businesses, retail
            chains, showrooms, corporates, and institutions. From LED boards to
            3D acrylic letters , we craft signage that enhances brand identity
            and makes a lasting impression.
          </motion.p>

          {/* FEATURES */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#f58020] to-[#d4550d] rounded-full flex items-center justify-center shadow-lg shadow-[#f58020]/40 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </div>
                <p className="text-gray-300 text-sm sm:text-base">{text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-3 gap-4 pt-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 * index }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-4 text-center hover:border-[#f58020]/30 transition-all"
                >
                  <Icon className="w-6 h-6 text-[#f58020] mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* ⭐ FOUNDERS SECTION (UPDATED FULL PREMIUM VERSION) ⭐ */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-20 md:mt-32"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Meet Our <span className="text-[#f58020]">Founders</span>
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group h-full"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[#f58020]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative h-full flex flex-col bg-gradient-to-br from-[#0d0d0d] to-black border border-white/10 rounded-2xl p-8 hover:border-[#f58020]/50 transition-all duration-500 shadow-2xl">
                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#f58020] shadow-2xl"
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* NAME & TITLE */}
                <div className="text-center mb-6">
                  <h4 className="text-white text-2xl md:text-[26px] font-bold mb-2 tracking-tight">
                    {founder.name}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-[16px] italic">
                    {founder.title}
                  </p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-4 h-1 w-20 bg-[#f58020] mx-auto rounded-full"
                  ></motion.div>
                </div>

                {/* QUOTES — EVEN HEIGHT */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="space-y-8 px-4">
                    {founder.quotes.map((quote, qIndex) => (
                      <motion.div
                        key={qIndex}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: qIndex * 0.2 }}
                        className="text-center"
                      >
                        <p className="text-gray-200 text-[18px] md:text-[20px] leading-relaxed italic font-light">
                          “{quote}”
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </motion.section>
  );
}

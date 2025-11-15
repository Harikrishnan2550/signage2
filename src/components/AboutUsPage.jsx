import { motion, useScroll, useTransform } from "framer-motion";
import { Check, Award, Users, Clock } from "lucide-react";
import { useRef } from "react";
import assests from "../assets/assests";

export default function AboutUsPage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const features = [
    "End-to-end service — design, printing & installation",
    "High-grade materials and long-lasting finish",
    "Custom signage for all industries",
    "On-time delivery and professional installation"
  ];

  const stats = [
    { icon: Award, value: "500+", label: "Projects Delivered" },
    { icon: Users, value: "300+", label: "Happy Clients" },
    { icon: Clock, value: "15+", label: "Years Experience" }
  ];

  const founders = [
    {
      name: "SHIFFIL MOHAMMED",
      title: "Founder & Managing Director",
      image: assests.founder1,
      quotes: [
        "We started it with a dream fulfillment... and now it is growing with a great team & vision",
        "For us, every single Signage project is a chance to make a positive impact on your brand.",
        "We don't just make Signages, We create Brand Statements"
      ]
    },
    {
      name: "FAHAD",
      title: "Co-Founder & Director",
      image: assests.founder2,
      quotes: [
        "Every signage we make carries your vision and our dedication. Let's keep building together.",
        "From Bold Ideas to Brilliant Signages.."
      ]
    }
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative w-full bg-black text-gray-300 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Radial Orange Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f58020]/5 rounded-full blur-3xl"></div>

      {/* Accent Line */}
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
        className="max-w-7xl mx-auto mb-8 md:mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f58020]/10 border border-[#f58020]/30 rounded-full text-[#f58020] text-xs font-semibold backdrop-blur-sm">
          <span className="w-2 h-2 bg-[#f58020] rounded-full animate-pulse"></span>
          About Our Company
        </span>
      </motion.div>

      {/* MAIN CONTENT GRID */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative group"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -inset-4 bg-gradient-to-r from-[#f58020]/20 via-[#f58020]/30 to-[#f58020]/20 blur-3xl rounded-2xl"
          />

          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }}>
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Design Phantom Team"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1]">
              About{" "}
              <motion.span
                className="inline-block bg-gradient-to-r from-[#f58020] via-[#d4550d] to-[#d4550d] bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Design Phantom
              </motion.span>
            </h2>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-4 h-1 w-24 bg-gradient-to-r from-[#f58020] to-[#d4550d] rounded-full origin-left"
            />
          </motion.div>

          <p className="text-gray-300 text-lg leading-relaxed">
            We are a premium signage company delivering high-quality designs for brands, retail, and businesses.
          </p>

          {/* FEATURES */}
          <div className="space-y-4">
            {features.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  className="w-6 h-6 bg-gradient-to-br from-[#f58020] to-[#d4550d] rounded-full flex items-center justify-center shadow-lg shadow-[#f58020]/40"
                >
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </motion.div>

                <p className="text-gray-300 group-hover:text-white transition-colors text-sm sm:text-base">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4 pt-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-4 text-center hover:border-[#f58020]/30 transition"
                >
                  <Icon className="w-6 h-6 text-[#f58020] mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* BUTTON */}
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(245,128,32,0.4)" }}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-[#f58020] to-[#d4550d] text-white font-bold text-sm rounded-lg shadow-lg shadow-[#f58020]/30 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More About Us →
            </span>

            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#d4550d] to-[#f58020]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>

      {/* FOUNDERS */}
      <motion.div className="max-w-7xl mx-auto mt-24 md:mt-32">
        <motion.h3 className="text-white text-3xl md:text-4xl font-bold text-center mb-16">
          Meet Our <span className="text-[#f58020]">Founders</span>
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-[#f58020]/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition" />

              <div className="relative bg-gradient-to-br from-[#0d0d0d] to-black border border-white/10 rounded-2xl p-8 hover:border-[#f58020]/30 transition">

                {/* IMAGE */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#f58020]/40 shadow-2xl"
                >
                  <img src={founder.image} alt={founder.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                {/* NAME */}
                <div className="text-center mb-6">
                  <h4 className="text-white text-xl md:text-2xl font-bold">{founder.name}</h4>
                  <p className="text-gray-400 italic">{founder.title}</p>

                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mt-3 h-0.5 w-16 bg-[#f58020] mx-auto rounded-full"
                  />
                </div>

                {/* QUOTES */}
                <div className="space-y-4">
                  {founder.quotes.map((quote, qIndex) => (
                    <motion.p
                      key={qIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: qIndex * 0.1 }}
                      className="text-gray-300 italic text-center"
                    >
                      {quote}
                    </motion.p>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    </motion.section>
  );
}

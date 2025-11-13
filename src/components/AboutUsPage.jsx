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
        "Every signage we make carries your vision and our dedication. Let's keep building together. Grateful for your support as we keep taking brands to the Next Level.",
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
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Radial Gradient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-3xl"></div>

      {/* Top Accent Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent origin-left"
      ></motion.div>

      {/* Section Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto mb-8 md:mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-400 text-xs font-semibold backdrop-blur-sm">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          About Our Company
        </span>
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        {/* LEFT SIDE - IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative group"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-red-500/30 to-red-600/20 blur-3xl rounded-2xl"
          ></motion.div>

          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                alt="Design Phantom Team"
                className="w-full h-[350px] sm:h-[450px] lg:h-[550px] object-cover"
              />
              
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
              ></motion.div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT SIDE - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              About{" "}
              <motion.span 
                className="inline-block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Design Phantom
              </motion.span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mt-4 h-1 w-24 bg-gradient-to-r from-red-600 to-red-400 rounded-full origin-left"
            ></motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-gray-300 text-base sm:text-lg leading-relaxed"
          >
            We are a premium signage company delivering high-quality,
            performance-driven designs for brands, retail chains, showrooms and
            businesses. From LED boards to 3D letters — we create signage that
            stands out and lasts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-3 md:space-y-4"
          >
            {features.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + (0.1 * index) }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-3 group cursor-default"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-lg shadow-red-600/40 mt-0.5"
                >
                  <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                </motion.div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 gap-3 sm:gap-4 pt-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + (0.1 * index), duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-xl p-3 sm:p-4 text-center cursor-default group hover:border-red-500/30 transition-all duration-300"
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(220, 38, 38, 0.4)" 
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-700 font-bold text-white text-sm rounded-lg overflow-hidden shadow-lg shadow-red-600/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              Learn More About Us
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
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
        </motion.div>
      </div>

      {/* FOUNDERS SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto mt-20 md:mt-32"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Meet Our <span className="text-red-600">Founders</span>
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-br from-red-600/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative bg-gradient-to-br from-[#0d0d0d] to-black border border-white/10 rounded-2xl p-6 md:p-8 hover:border-red-500/30 transition-all duration-500">
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-red-600/30 shadow-2xl"
                >
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </motion.div>

                {/* Name & Title */}
                <div className="text-center mb-6">
                  <h4 className="text-white text-xl md:text-2xl font-bold mb-2 tracking-tight">
                    {founder.name}
                  </h4>
                  <p className="text-gray-400 text-sm md:text-base italic">
                    {founder.title}
                  </p>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-3 h-0.5 w-16 bg-red-600 mx-auto rounded-full"
                  ></motion.div>
                </div>

                {/* Quotes */}
                <div className="space-y-4">
                  {founder.quotes.map((quote, qIndex) => (
                    <motion.p
                      key={qIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + (qIndex * 0.1), duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-gray-300 text-sm md:text-base italic leading-relaxed text-center"
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"></div>
    </motion.section>
  );
}
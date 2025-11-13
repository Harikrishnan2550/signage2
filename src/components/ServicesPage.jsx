import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Box, Palette, Zap, Building2, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function ServicesPage() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const serviceList = [
    {
      title: "LED Sign Boards",
      desc: "High-brightness LED signage for indoor and outdoor branding with energy-efficient solutions.",
      icon: Lightbulb,
      gradient: "from-yellow-500 to-orange-600",
      glow: "yellow-500",
    },
    {
      title: "Acrylic 3D Letters",
      desc: "Premium acrylic, metal and illuminated 3D letter solutions that add depth to your brand.",
      icon: Box,
      gradient: "from-blue-500 to-cyan-600",
      glow: "blue-500",
    },
    {
      title: "Vinyl Printing",
      desc: "High-resolution vinyl printing for retail and corporate needs with vibrant colors.",
      icon: Palette,
      gradient: "from-purple-500 to-pink-600",
      glow: "purple-500",
    },
    {
      title: "Glow Sign Boards",
      desc: "Eye-catching illuminated signage to boost your brand visibility day and night.",
      icon: Zap,
      gradient: "from-red-500 to-rose-600",
      glow: "red-500",
    },
    {
      title: "Branding Boards",
      desc: "Custom branding boards for shops, offices, and commercial spaces that make statements.",
      icon: Building2,
      gradient: "from-green-500 to-emerald-600",
      glow: "green-500",
    },
    {
      title: "Wayfinding Signage",
      desc: "Directional & internal signage for malls, showrooms and buildings with clear navigation.",
      icon: MapPin,
      gradient: "from-indigo-500 to-violet-600",
      glow: "indigo-500",
    },
  ];

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative w-full bg-black text-gray-300 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Multiple Radial Gradients */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-red-600/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>

      {/* Top Accent Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-600 to-transparent origin-left"
      ></motion.div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/10 border border-red-500/30 rounded-full text-red-400 text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            What We Offer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-4"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            Our Premium{" "}
            <motion.span 
              className="inline-block bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Services
            </motion.span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-4 h-1 w-32 bg-gradient-to-r from-red-600 via-red-500 to-red-400 rounded-full mx-auto"
          ></motion.div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-gray-400 text-center text-base sm:text-lg mt-4 max-w-3xl mx-auto leading-relaxed px-4"
        >
          High-quality signage and branding solutions crafted with precision, innovation, and a commitment to excellence that elevates your brand presence.
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
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative"
              >
                {/* Card Background with Gradient Border Effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden cursor-default h-full"
                >
                  {/* Animated Gradient Glow on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`}
                  ></motion.div>

                  {/* Floating Particles Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0
                      }}
                      className={`absolute top-1/4 left-1/4 w-2 h-2 bg-${service.glow} rounded-full blur-sm`}
                    ></motion.div>
                    <motion.div
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: 0.5
                      }}
                      className={`absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-${service.glow} rounded-full blur-sm`}
                    ></motion.div>
                  </div>

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] shadow-lg group-hover:shadow-2xl group-hover:shadow-${service.glow}/30 transition-shadow duration-300`}
                  >
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" strokeWidth={1.5} />
                    </div>
                    
                    {/* Icon Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 rounded-2xl`}></div>
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:via-gray-200 group-hover:to-white transition-all duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-red-500 font-semibold text-sm group-hover:text-red-400 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Animated Bottom Border */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r ${service.gradient} origin-left`}
                  ></motion.div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 md:mt-20 text-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 60px rgba(220, 38, 38, 0.4)"
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 font-bold text-white text-sm sm:text-base rounded-xl overflow-hidden shadow-xl shadow-red-600/30"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Services
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
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

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
    </motion.section>
  );
}
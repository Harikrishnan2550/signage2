import { motion, useScroll, useTransform } from "framer-motion";
import { Lightbulb, Box, Palette, Zap, Building2, MapPin, ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function Services() {
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
      gradient: "from-[#f58020] to-[#d4550d]",
      glow: "[#f58020]",
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
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Branded Radial Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#f58020]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#d4550d]/5 rounded-full blur-3xl"></div>

      {/* Top Accent Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f58020]/10 border border-[#f58020]/30 rounded-full text-[#f58020] text-xs font-semibold backdrop-blur-sm">
            <Sparkles className="w-3 h-3" />
            What We Offer
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-4"
        >
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black">
            Our Premium{" "}
            <motion.span
              className="inline-block bg-gradient-to-r from-[#f58020] via-[#d4550d] to-[#d4550d] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Services
            </motion.span>
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="mt-4 h-1 w-32 bg-gradient-to-r from-[#f58020] via-[#d4550d] to-[#d4550d] rounded-full mx-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-center mt-4 max-w-3xl mx-auto"
        >
          High-quality signage and branding solutions crafted with precision and innovation.
        </motion.p>

        {/* Service Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Hover Border */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition" />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative bg-gradient-to-br from-gray-900 to-black border border-white/10 rounded-2xl p-8 shadow-2xl"
                >
                  {/* Hover Glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 blur-2xl transition`}
                  />

                  {/* Particle Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                    <motion.div
                      animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute top-1/4 left-1/4 w-2 h-2 bg-${service.glow} rounded-full blur-sm`}
                    />
                    <motion.div
                      animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className={`absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-${service.glow} rounded-full blur-sm`}
                    />
                  </div>

                  {/* Icon Block */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-[2px] shadow-lg group-hover:shadow-2xl transition`}
                  >
                    <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Learn More */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-[#f58020] font-semibold text-sm"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Hover Bottom Border */}
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

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(245,128,32,0.4)" }}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#f58020] to-[#d4550d] text-white font-bold text-sm rounded-xl shadow-xl overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              View All Services
              <ArrowRight className="w-5 h-5" />
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

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </motion.section>
  );
}

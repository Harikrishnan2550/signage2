import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Check, 
  Award, 
  Users, 
  Clock, 
  Target, 
  Rocket, 
  Hammer, 
  Lightbulb, 
  Heart, 
  Leaf,
  Home,          // Added Home Icon
  ChevronRight   // Added Chevron Icon
} from "lucide-react";
import { useRef } from "react";
import assests from "../assets/assests";

// ⭐ Added { onNav } prop so the Home link works
export default function AboutUsPage({ onNav }) {

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

  const whyChooseData = [
    {
      title: "Craftsmanship & Quality",
      desc: "At NEXT LEVEL Signages, we prioritize quality material and expert techniques to ensure durability and excellence in every sign.",
      icon: Hammer,
    },
    {
      title: "Innovation & Creativity",
      desc: "We are not just making signages, we are creating visibility. We blend technology with design to make you stand out.",
      icon: Lightbulb,
    },
    {
      title: "Customer Satisfaction",
      desc: "We highlight our commitment to meeting client needs with personalized designs & reliable services tailored to you.",
      icon: Heart,
    },
    {
      title: "Sustainability",
      desc: "We are committed to eco-friendly practices by using sustainable materials and minimizing wastage during production.",
      icon: Leaf,
    },
  ];

  return (
    <>
      {/* ---------------------------------------------------- */}
      {/* 🔥 PREMIUM BANNER SECTION WITH BREADCRUMB */}
      {/* ---------------------------------------------------- */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden flex items-center justify-center">

        {/* Banner Background */}
        <motion.div
          style={{ y: bannerY }}
          className="absolute inset-0"
        >
          <img
            src={assests.bannerImage}
            alt="Banner"
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </motion.div>

        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>

        {/* ⭐ PREMIUM BREADCRUMB & TITLE ⭐ */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-10">
          
          {/* Glass Breadcrumb Pill */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl"
          >
            
            {/* Home Link */}
            <div 
              onClick={() => onNav('home')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
            >
              <Home size={16} className="group-hover:text-[#f58020] transition-colors" />
              <span className="text-sm font-bold uppercase tracking-widest">Home</span>
            </div>

            {/* Separator */}
            <ChevronRight size={16} className="text-gray-600" />

            {/* Active Page with Animated Underline */}
            <div className="relative flex flex-col items-center">
              <span className="text-[#f58020] text-sm font-bold uppercase tracking-widest">
                About
              </span>
            </div>
          </motion.div>

           <motion.div 
                className=" left-0 h-[4px] bg-[#f58020] w-[100px] rounded-full shadow-[0_0_10px_#f58020] mt-5 "
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 🔥 ABOUT PAGE CONTENT */}
      {/* ---------------------------------------------------- */}
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="relative w-full bg-black text-gray-300 py-20 md:py-5 px-4 sm:px-6 lg:px-8 overflow-hidden "
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
                  alt="About Us"
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

            <p className="text-gray-300 text-lg leading-relaxed">
              We are a Kochi-based premium signage and branding company delivering
              high-quality, performance-driven solutions for businesses, retail
              chains, showrooms, corporates, and institutions. From LED boards to
              3D acrylic letters , we craft signage that enhances brand identity
              and makes a lasting impression.
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

        {/* ---------------------------------------------------- */}
        {/* 👥 FOUNDERS SECTION */}
        {/* ---------------------------------------------------- */}
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
                    <img src={founder.image} className="w-full h-full object-cover" alt={founder.name} />
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


        {/* ---------------------------------------------------- */}
        {/* 🚀 NEW: VISION & MISSION SECTION */}
        {/* ---------------------------------------------------- */}
        <div className="max-w-7xl mx-auto mt-32 md:mt-40">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#f58020]/10 rounded-full blur-2xl group-hover:bg-[#f58020]/20 transition duration-500"></div>
              
              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-[#f58020]/20 rounded-lg text-[#f58020]">
                    <Target size={32} />
                 </div>
                 <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the <span className="text-white font-semibold">leading provider of integrated signage solutions</span> within this state of Kerala & soon to other State as well. Setting the industry standard for quality, innovation, and elevate brands through expertly crafted signage that captures attention, enhance visibility.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#f58020]/10 rounded-full blur-2xl group-hover:bg-[#f58020]/20 transition duration-500"></div>

              <div className="flex items-center gap-4 mb-6">
                 <div className="p-3 bg-[#f58020]/20 rounded-lg text-[#f58020]">
                    <Rocket size={32} />
                 </div>
                 <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To design, manufacture, and install <span className="text-white font-semibold">high-impact, durable, and technologically advanced signages</span> that effectively communicate our clients' brand identity, guide their customers, and drive business growth. Our goal is to redefine visual branding by transforming spaces into experiences.
              </p>
            </motion.div>

          </div>
        </div>


        {/* ---------------------------------------------------- */}
        {/* ⭐ NEW: WHY CHOOSE US SECTION WITH HOVER EFFECT */}
        {/* ---------------------------------------------------- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto mt-32 md:mt-40 mb-10"
        >
          <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Why Choose <span className="text-[#f58020]">NEXT LEVEL</span> Signages?
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChooseData.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  // ⭐ UPDATED: Hover Effect
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="group p-6 rounded-xl border border-white/10 bg-[#0a0a0a] hover:bg-[#111] hover:border-[#f58020]/40 transition-all duration-300 flex flex-col relative overflow-hidden"
                >
                  <div className="mb-5 inline-block p-4 rounded-full bg-gradient-to-br from-gray-800 to-black border border-white/5 group-hover:border-[#f58020] group-hover:shadow-[0_0_20px_rgba(245,128,32,0.3)] transition-all duration-300 relative z-10">
                    <Icon className="text-gray-400 group-hover:text-[#f58020] transition-colors duration-300" size={28} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-[#f58020] transition-colors relative z-10">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">
                    {item.desc}
                  </p>

                  {/* Subtle Glow Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    className="absolute inset-0 bg-[#f58020] pointer-events-none"
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black pointer-events-none"></div>

      </motion.section>
    </>
  );
}
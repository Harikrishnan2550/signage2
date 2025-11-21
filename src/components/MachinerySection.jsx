import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Cpu, Printer, ArrowUpRight, Layers } from "lucide-react";
// make sure to import your assets correctly
import assests from "../assets/assests"; 

// --- DATA ---
const machineData = [
  {
    id: 1,
    title: "Laser Cutting & Engraving",
    subtitle: "Precision Meets Speed",
    icon: Zap,
    tags: ["CO2 Technology", "Fiber Laser", "No Burrs"],
    description: "We utilize cutting-edge CO2 and Fiber laser technology for unparalleled precision. Our CO2 machines deliver crystal-clear polished edges on acrylics and wood.",
    images: {
      main: assests.laser2, 
      sub1: assests.laser1,
      sub2: assests.laser3,
    }
  },
  {
    id: 2,
    title: "CNC Routing & 3D Carving",
    subtitle: "Heavy-Duty Fabrication",
    icon: Cpu,
    tags: ["3D Profiling", "V-Carving", "Deep Texture"],
    description: "Our CNC routers are the powerhouse for dimensional signage, handling thick materials beyond laser capabilities. Perfect for aluminum and high-density foams.",
    images: {
      main: assests.cnc1,
      sub1: assests.cnc2,
      sub2: assests.cnc3,
    }
  },
  {
    id: 3,
    title: "Printing & Sticker Cutting",
    subtitle: "Vibrant & Weather Resistant",
    icon: Printer,
    tags: ["UV Flatbed", "Roll-to-Roll", "Vehicle Wraps"],
    description: "Our state-of-the-art printing suite includes high-resolution large-format UV flatbed and roll-to-roll printers. We deliver vibrant, weather-resistant graphics.",
    images: {
      main: assests.printing1,
      sub1: assests.printing2,
      sub2: assests.printing3,
    }
  },
];

export default function MachinerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === machineData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? machineData.length - 1 : prev - 1));
  };

  // ⭐ UPDATED: Auto-scroll set to 2 seconds (2000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Changed from 5000 to 2000

    // Cleanup interval on unmount or when user manually changes slide
    return () => clearInterval(interval);
  }, [currentIndex]); 

  const current = machineData[currentIndex];
  const Icon = current.icon;

  const variants = {
    initial: (direction) => ({ opacity: 0, x: direction > 0 ? 50 : -50 }),
    animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "circOut" } },
    exit: (direction) => ({ opacity: 0, x: direction > 0 ? -50 : 50, transition: { duration: 0.3, ease: "easeIn" } }),
  };

  // Reusable styles for the glass containers
  const glassContainerStyle = "relative group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-md transition-all duration-500 hover:border-[#f58020]/40 hover:shadow-[0_0_30px_-5px_rgba(245,128,32,0.2)]";
  
  // Reusable styles for the PNG images to make them glow on hover
  const pngImageStyle = "absolute inset-0 w-full h-full object-contain p-4 md:p-6 z-10 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_10px_20px_rgba(245,128,32,0.25)]";

  return (
    <section className="relative w-full bg-[#050505] py-16 md:py-24 lg:py-32 overflow-hidden font-sans">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#f58020]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-3 md:mb-4"
            >
              <Layers size={16} className="text-[#f58020]" />
              <span className="text-[#f58020] font-medium tracking-widest uppercase text-[10px] md:text-xs">
                Our Infrastructure
              </span>
            </motion.div>
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Precision in Every <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">Cut & Print.</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 self-end md:self-auto">
            <button onClick={prevSlide} className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#f58020] hover:border-[#f58020] hover:text-black transition-all duration-300 active:scale-95 backdrop-blur-sm">
              <ChevronLeft size={20} />
            </button>
            <button onClick={nextSlide} className="p-3 md:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#f58020] hover:border-[#f58020] hover:text-black transition-all duration-300 active:scale-95 backdrop-blur-sm">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CONTENT AREA */}
        <div className="relative min-h-[750px] md:min-h-[600px] lg:min-h-[500px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start lg:items-center"
            >
              
              {/* LEFT: TEXT CONTENT */}
              <div className="lg:col-span-5 flex flex-col justify-center space-y-6 md:space-y-8 order-1">
                <div className="inline-flex items-center gap-3 self-start px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-[#f58020]/10 border border-[#f58020]/20 backdrop-blur-sm">
                  <Icon size={16} className="text-[#f58020] md:w-[18px] md:h-[18px]" />
                  <span className="text-[#f58020] text-xs md:text-sm font-semibold tracking-wide uppercase">
                    {current.subtitle}
                  </span>
                </div>
                
                <div className="space-y-4 md:space-y-6">
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white">
                    {current.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-lg leading-relaxed border-l-2 border-[#f58020] pl-4 md:pl-6 bg-gradient-to-r from-white/5 to-transparent py-2 rounded-r-lg">
                    {current.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {current.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 md:px-3 rounded-md bg-white/5 text-gray-300 text-[10px] md:text-xs border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT: PREMIUM GLASS BENTO GRID */}
              <div className="lg:col-span-7 w-full h-[350px] md:h-[450px] lg:h-[500px] order-2">
                <div className="grid grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-3 md:gap-4 h-full w-full">
                  
                  {/* MAIN IMAGE (Large) */}
                  <div className={`col-span-2 lg:col-span-2 row-span-1 lg:row-span-2 ${glassContainerStyle}`}>
                      {/* Internal Spotlight Gradient */}
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)] z-0" />
                      
                      <motion.img 
                        src={current.images.main} 
                        alt="Main Machinery"
                        className={pngImageStyle}
                      />

                      {/* Badge */}
                      <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-2 px-2 py-1 md:px-3 md:py-1.5 bg-[#050505]/80 backdrop-blur-md border border-white/10 rounded-lg z-20">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#f58020] animate-pulse shadow-[0_0_10px_#f58020]" />
                        <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-wider">Main Unit</span>
                      </div>
                  </div>

                  {/* SUB IMAGE 1 (Top Right) */}
                  <div className={`col-span-1 row-span-1 ${glassContainerStyle}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)] z-0" />
                    <img 
                      src={current.images.sub1} 
                      alt="Detail 1"
                      className={pngImageStyle}
                    />
                  </div>

                  {/* SUB IMAGE 2 (Bottom Right) */}
                  <div className={`col-span-1 row-span-1 ${glassContainerStyle}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)] z-0" />
                      <img 
                      src={current.images.sub2} 
                      alt="Detail 2"
                      className={pngImageStyle}
                    />
                    <div className="absolute bottom-2 right-2 bg-white/10 p-1 md:p-1.5 rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 hover:bg-[#f58020] hover:text-black">
                        <ArrowUpRight size={12} className="text-white group-hover:text-black md:w-4 md:h-4" />
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Footer Progress Bar */}
        <div className="mt-8 md:mt-12 h-px w-full bg-white/5 relative overflow-hidden rounded-full font-sans">
            <motion.div 
                key={currentIndex}
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-[#f58020] to-[#ffa35c] shadow-[0_0_10px_#f58020]"
                style={{ width: `${((currentIndex + 1) / machineData.length) * 100}%` }}
            />
        </div>

      </div>
    </section>
  );
}
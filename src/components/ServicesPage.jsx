import { motion, useScroll, useTransform } from "framer-motion";
import {
  Store,
  Palette,
  Layers,
  SignpostBig,
  Zap,
  Users,
  ShieldCheck,
  Maximize,
  Cpu,
  Clock,
  CheckCircle2,
  HardHat,
  Home,
  ChevronRight
} from "lucide-react";
import { useRef, useState } from "react";
import assests from "../assets/assests";

// ⭐ MOCKUP: Images Mapping
const images = {
  fabrication: assests.fabricationWorkshop,
  crane: assests.craneInstall,
  lift: assests.liftInstall,
  rope: assests.ropeAccess,
};

// ⭐ NEW COMPONENT: Handles the Flip Logic individually
const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to toggle flip on click (for mobile mainly)
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group relative h-[380px] md:h-[420px] perspective-1000 mt-8 md:mt-14 cursor-pointer"
      onClick={handleFlip}
    >
      <motion.div
        // ⭐ UPDATE: Added logic here.
        // 1. md:group-hover -> Only hover on Desktop (md screens and up)
        // 2. ${isFlipped ? ...} -> Manually applies flip class if clicked (for Mobile)
        className={`relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* --- FRONT FACE --- */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 [backface-visibility:hidden] flex flex-col justify-between shadow-xl">
          <div>
            <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center md:group-hover:border-[#f58020]/50 transition-colors">
              <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#f58020]" />
            </div>
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4 leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed border-l-2 border-[#f58020]/50 pl-4">
              {service.desc}
            </p>
          </div>
          <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold text-[#f58020] uppercase tracking-widest mt-4">
            <span className="w-6 md:w-8 h-[1px] bg-[#f58020]"></span>
            {/* Change text based on device context usually, but simple here */}
            Tap to View
          </div>
        </div>

        {/* --- BACK FACE --- */}
        <div className="absolute inset-0 h-full w-full rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] border border-[#f58020]/30 shadow-[0_0_30px_rgba(245,128,32,0.15)]">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6 text-center">
            <div className="p-3 bg-[#f58020] rounded-full mb-3 shadow-lg">
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
            </div>
            <h3 className="text-white text-lg md:text-xl font-bold drop-shadow-lg">
              {service.title}
            </h3>
            <p className="text-gray-200 text-[10px] md:text-xs mt-2 max-w-[200px]">
              Real Project Snapshot
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function ServicesPage({ onNav }) {
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 300], [0, 120]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  /* --- DATA --- */
  const serviceList = [
    {
      title: "Frontage Sign Boards",
      desc: "Frontage Sign Boards show off your business. They draw in customers. We make outdoor signs that last and look great day and night. Our signs make your business stand out in Kochi.",
      icon: Store,
      image: assests.bikashBabu,
    },
    {
      title: "Interior Branding & Signages",
      desc: "Interior Signage makes your office look good. We make signs that are clean and modern. Our signs include logos and more. They make your space look great and leave a good impression.",
      icon: Palette,
      image: assests.interiorStore,
    },
    {
      title: "Wall Graphics & Glass Branding",
      desc: "Wall and Glass Branding makes your space better. We make prints and stickers that look great. They are perfect for many places in Kochi. They make your space look better and show off your brand.",
      icon: Layers,
      image: assests.glassSign,
    },
    {
      title: "Directional & Wayfinding",
      desc: "Directional Signages help people find their way. We make signs that are easy to read. They are great for malls and more. Our signs help people move around easily.",
      icon: SignpostBig,
      image: assests.wayfinding,
    },
    {
      title: "Laser Cutting & CNC Fabrication",
      desc: "Our Laser & CNC Cutting services are precise. We cut many materials for signs and more. We make custom shapes and letters. Our tech and skill make sure our work is top-notch.",
      icon: Zap,
      image: assests.laserCut,
    },
  ];

  const featuresData = [
    {
      icon: Maximize,
      feature: "Complete Versatility",
      capability:
        "In-house capability for both fine laser cuts and heavy-duty routing.",
      benefit:
        "Any sign, any size, any material. We handle complex mixed-media projects.",
    },
    {
      icon: CheckCircle2,
      feature: "Perfect Finish",
      capability:
        "Laser-polished edges for acrylics; Router precision for structure.",
      benefit: "Superior quality with attention to aesthetic detail.",
    },
    {
      icon: Cpu,
      feature: "Design Freedom",
      capability: "No geometric limitations, reproducing complex logos.",
      benefit: "Unrestricted creativity in design.",
    },
    {
      icon: Clock,
      feature: "Efficiency",
      capability: "Automated digital workflows ensure fast results.",
      benefit: "Faster project turnaround and consistent quality.",
    },
  ];

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* 🔥 PREMIUM BREADCRUMB BANNER */}
      {/* ------------------------------------------------------ */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: bannerY }} className="absolute inset-0">
          <img
            src={assests.bannerImage}
            alt="Services Banner"
            className="w-full h-full object-cover brightness-[0.5]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black"></div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 mt-10">
          {/* Breadcrumb Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative inline-flex items-center gap-2 md:gap-4 px-4 py-2 md:px-6 md:py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl overflow-visible"
          >
            <div
              onClick={() => onNav("home")}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group"
            >
              <Home
                size={14}
                className="group-hover:text-[#f58020] transition-colors md:w-4 md:h-4"
              />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest">
                Home
              </span>
            </div>

            <ChevronRight size={14} className="text-gray-600 md:w-4 md:h-4" />

            <div className="relative flex flex-col items-center">
              <span className="text-[#f58020] text-xs md:text-sm font-bold uppercase tracking-widest">
                Services
              </span>

              <motion.div
                className="absolute -bottom-10  md:-bottom-12 right-9 sm:right-0 md:right-8 h-[3px] md:h-[4px] w-[80px] md:w-[120px] bg-[#f58020] rounded-full shadow-[0_0_10px_#f58020]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="relative w-full bg-black text-gray-300 py-10 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Backgrounds */}
        <div className="absolute inset-0 opacity-[0.02] bg-[size:40px_40px] md:bg-[size:60px_60px] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" />
        <div className="absolute top-0 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#f58020]/5 rounded-full blur-3xl" />
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent"
        />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* 1. SERVICES GRID */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-black">
              Our Premium{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f58020] to-[#d4550d]">
                Services
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
            {serviceList.map((service, index) => (
              // ⭐ USING NEW COMPONENT HERE
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* 2. TEAM & WORKSHOP SECTION */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-20 md:mb-32">
            <div className="space-y-4 md:space-y-6">
              <div className="inline-flex items-center gap-2 text-[#f58020] font-semibold uppercase text-xs md:text-sm">
                <Users size={16} className="md:w-[18px] md:h-[18px]" />{" "}
                <span>The People Behind The Tech</span>
              </div>
              <h2 className="text-2xl md:text-5xl font-bold text-white">
                Expert Fabrication <span className="text-[#f58020]">Team</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg border-l-2 border-[#f58020]/30 pl-4 md:pl-6">
                Our advanced equipment is only as effective as the people behind
                it. We pride ourselves on having a highly skilled dedicated team.
              </p>
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <ShieldCheck className="text-[#f58020] shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">
                      Certified Specialists
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">
                      Expert welders, finishers, and assemblers.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <CheckCircle2 className="text-[#f58020] shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <div>
                    <h4 className="text-white font-bold text-sm md:text-base">
                      Quality Assurance
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">
                      Rigorous multi-point inspections.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* WORKSHOP IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl"
            >
              <img
                src={images.fabrication}
                alt="Fabrication Workshop"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="px-3 py-1 bg-[#f58020] text-black text-[10px] md:text-xs font-bold rounded-full uppercase">
                  In-House
                </span>
                <h3 className="text-white text-xl md:text-2xl font-bold mt-2">
                  Precision Assembly
                </h3>
              </div>
            </motion.div>
          </div>

          {/* 3. FEATURES TABLE */}
          <div className="mb-20 md:mb-32">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-white text-2xl md:text-4xl font-bold">
                Capabilities & <span className="text-[#f58020]">Benefits</span>
              </h2>
            </div>
            <div className="grid gap-3 md:gap-4">
              {/* Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-10 gap-4 px-6 py-3 bg-white/5 text-[#f58020] font-bold text-sm uppercase rounded-t-xl">
                <div className="col-span-2">Feature</div>
                <div className="col-span-4">Capability</div>
                <div className="col-span-4">Benefit</div>
              </div>
              {/* Rows */}
              {featuresData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col md:grid md:grid-cols-10 gap-3 md:gap-4 p-5 md:p-6 bg-[#0f0f0f] border border-white/10 rounded-xl hover:border-[#f58020]/40 transition-all"
                >
                  <div className="md:col-span-2 flex items-center gap-3">
                    <item.icon className="text-[#f58020] w-5 h-5 md:w-6 md:h-6" />
                    <span className="text-white font-bold text-sm md:text-base">
                      {item.feature}
                    </span>
                  </div>
                  <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-6">
                    <span className="md:hidden text-[10px] text-gray-500 font-bold block mb-1 uppercase">
                      Capability
                    </span>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.capability}
                    </p>
                  </div>
                  <div className="md:col-span-4 md:border-l md:border-white/10 md:pl-6">
                    <span className="md:hidden text-[10px] text-[#f58020] font-bold block mb-1 uppercase">
                      Benefit
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. INSTALLATION SECTION */}
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 gap-4">
              <div className="w-full md:w-auto">
                <div className="inline-flex items-center gap-2 text-[#f58020] font-semibold uppercase text-xs md:text-sm mb-2">
                  <HardHat size={16} className="md:w-[18px] md:h-[18px]" />{" "}
                  <span>Site Execution</span>
                </div>
                <h2 className="text-2xl md:text-5xl font-bold text-white">
                  Installation <span className="text-[#f58020]">Mastery</span>
                </h2>
              </div>
              <p className="text-gray-400 text-sm md:text-base max-w-md text-left md:text-left w-full md:w-auto">
                From heavy lifting to rope access, we have the equipment and
                certified teams to install anywhere.
              </p>
            </div>

            {/* The Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-[500px]">
              {/* Crane */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="group relative h-[300px] md:h-full rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={images.crane}
                  alt="Crane Install"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    Heavy Duty Lifting
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Handling massive structural components with precision
                    cranes.
                  </p>
                </div>
              </motion.div>

              {/* Lift */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="group relative h-[300px] md:h-full rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={images.lift}
                  alt="Scissor Lift Install"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    Facade Installation
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Efficient installation using hydraulic scissor lifts and
                    booms.
                  </p>
                </div>
              </motion.div>

              {/* Rope */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="group relative h-[300px] md:h-full rounded-2xl overflow-hidden border border-white/10"
              >
                <img
                  src={images.rope}
                  alt="Rope Access"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-lg md:text-xl font-bold">
                    Rope Access
                  </h3>
                  <p className="text-gray-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Certified abseiling teams for hard-to-reach vertical
                    surfaces.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </motion.section>
    </>
  );
}
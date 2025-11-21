import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  LayoutGroup,
} from "framer-motion";
import {
  X,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Home,          // Added for breadcrumb
} from "lucide-react";
import assests from "../assets/assests";

// ⭐ Added { onNav } prop for breadcrumb navigation
export default function GalleryPage({ onNav }) {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);

  /* Banner Parallax Animation */
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 300], [0, 100]); // Adjusted for new banner style

  /* Section scroll animation */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  /* ---------- Gallery items ---------- */
  const images = [
    { src: assests.g9, category: "indoor" },
    { src: assests.g11, category: "indoor" },
    { src: assests.g12, category: "indoor" },
    { src: assests.g13, category: "indoor" },
    { src: assests.g14, category: "indoor" },
    { src: assests.g15, category: "indoor" },
    { src: assests.g16, category: "outdoor" },
    { src: assests.g17, category: "outdoor" },
    { src: assests.g18, category: "outdoor" },
    { src: assests.g19, category: "outdoor" },
    { src: assests.g20, category: "outdoor" },
    { src: assests.g21, category: "outdoor" },
    { src: assests.g22, category: "outdoor" },
    { src: assests.g23, category: "outdoor" },
    { src: assests.g24, category: "outdoor" },
    { src: assests.g25, category: "outdoor" }
  ];

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.category === filter);

  /* Reset when filter changes */
  useEffect(() => {
    if (selected) {
      const idx = filteredImages.findIndex((f) => f.src === selected);
      if (idx === -1) {
        setSelected(null);
        setSelectedIndex(0);
      } else {
        setSelectedIndex(idx);
      }
    }
  }, [filter]);

  const openLightbox = (imgSrc, index) => {
    setSelected(imgSrc);
    setSelectedIndex(index);
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    const newIndex = (selectedIndex + 1) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelected(filteredImages[newIndex].src);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    const newIndex =
      (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedIndex(newIndex);
    setSelected(filteredImages[newIndex].src);
  };

  const layoutTransition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* 🔥 STANDARD PREMIUM BREADCRUMB BANNER (Updated) */}
      {/* ------------------------------------------------------ */}
      <section className="relative w-full h-[45vh] md:h-[55vh] overflow-hidden flex items-center justify-center">

        {/* Banner Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div style={{ y: bannerY }} className="absolute inset-0">
            <img
              src={assests.bannerImage}
              alt="Gallery Banner"
              className="w-full h-full object-cover brightness-[0.5]"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">

          {/* Interactive Breadcrumb Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full"
          >
            <button 
              onClick={() => onNav("home")} 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            >
              <Home size={14} className="group-hover:text-[#f58020] transition-colors" />
              <span className="text-sm font-medium uppercase tracking-wider">Home</span>
            </button>

            <ChevronRight size={14} className="text-gray-500" />

            <span className="text-[#f58020] text-sm font-bold uppercase tracking-wider">
              Gallery
            </span>
          </motion.div>
          
          {/* Orange Accent Line */}
          <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "80px" }}
             transition={{ delay: 0.5, duration: 0.8 }}
             className="h-1 bg-[#f58020] mt-8 rounded-full"
          />
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* 🔥 GALLERY SECTION */}
      {/* ------------------------------------------------------ */}
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="relative w-full bg-black text-gray-300 py-16 md:py-20 lg:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Soft Glows */}
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#f58020]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#d4550d]/10 rounded-full blur-3xl"></div>

        {/* Top Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent origin-left"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-[#f58020]/10 border border-[#f58020]/30 rounded-full text-[#f58020] text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3 h-3" />
              Project Showcase
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-center text-4xl sm:text-5xl lg:text-6xl font-black"
          >
            Selected{" "}
            <span className="bg-gradient-to-r from-[#f58020] via-[#ff9a33] to-[#d4550d] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mt-10 mb-10">
            <LayoutGroup>
              <div className="flex gap-4 items-center">
                {["all", "outdoor", "indoor"].map((type) => {
                  const active = filter === type;
                  return (
                    <motion.button
                      key={type}
                      onClick={() => setFilter(type)}
                      whileHover={{ scale: 1.06 }}
                      layout
                      transition={layoutTransition}
                      className={`relative px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                        active
                          ? "text-white border-transparent"
                          : "border-gray-600 text-gray-300 hover:border-[#f58020]"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="filter-pill"
                          className="absolute inset-0 rounded-full bg-[#f58020]"
                          style={{ zIndex: -1 }}
                          transition={layoutTransition}
                        />
                      )}
                      <span className="relative z-10">{type.toUpperCase()}</span>
                    </motion.button>
                  );
                })}
              </div>
            </LayoutGroup>
          </div>

          {/* Gallery Grid */}
          <LayoutGroup>
            <motion.div
              layout
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
            >
              <AnimatePresence>
                {filteredImages.map((img, index) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: -20 }}
                    transition={{ duration: 0.36 }}
                  >
                    <motion.div
                      className="relative rounded-xl overflow-hidden cursor-pointer border border-white/10 shadow-xl h-64 md:h-72 group"
                      whileHover={{ scale: 1.03 }}
                      onClick={() => openLightbox(img.src, index)}
                    >
                      <img
                        src={img.src}
                        alt={`gallery-${index}`}
                        className="w-full h-full object-cover rounded-xl"
                      />

                      {/* Zoom Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.24 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center"
                      >
                        <ZoomIn className="w-10 h-10 text-white opacity-90" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </LayoutGroup>
        </div>

        {/* Lightbox Viewer */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[999] px-4"
              onClick={() => setSelected(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.08, rotate: 90 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelected(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-[#f58020]/30"
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>

              {/* Image Counter */}
              <motion.div className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 rounded-full backdrop-blur-md border border-white/20">
                <span className="text-white text-sm font-semibold">
                  {selectedIndex + 1} / {filteredImages.length}
                </span>
              </motion.div>

              {/* Navigation Buttons */}
              <motion.button
                whileHover={{ scale: 1.06, x: -6 }}
                whileTap={{ scale: 0.96 }}
                onClick={prevImage}
                className="absolute left-6 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20"
              >
                <ChevronLeft className="w-8 h-8 text-white" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06, x: 6 }}
                whileTap={{ scale: 0.96 }}
                onClick={nextImage}
                className="absolute right-6 w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20"
              >
                <ChevronRight className="w-8 h-8 text-white" />
              </motion.button>

              {/* Lightbox Image */}
              <motion.div
                initial={{ scale: 0.75, rotateY: 90 }}
                animate={{ scale: 1, rotateY: 0 }}
                exit={{ scale: 0.75, rotateY: -90 }}
                transition={{ duration: 0.45 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#f58020]/30 via-[#ff9a33]/20 to-[#d4550d]/30 blur-3xl"></div>
                <img
                  src={selected}
                  alt="lightbox"
                  className="w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
      </motion.section>
    </>
  );
};
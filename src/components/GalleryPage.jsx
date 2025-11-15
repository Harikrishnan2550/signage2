// src/components/GalleryPage.jsx
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
} from "lucide-react";
import assests from "../assets/assests";

export default function GalleryPage() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);

  /* Banner Parallax Animation */
  const { scrollY } = useScroll();
  const bannerY = useTransform(scrollY, [0, 300], [0, 120]);

  /* Section scroll animation */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  /* ---------- Gallery items ---------- */
  const images = [
    { src: assests.g3, category: "indoor" },
    { src: assests.g5, category: "outdoor" },
    { src: assests.g1, category: "indoor" },
    { src: assests.g6, category: "outdoor" },
    { src: assests.g2, category: "indoor" },
    { src: assests.g7, category: "outdoor" },
    { src: assests.g4, category: "indoor" },
    { src: assests.g8, category: "outdoor" },
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
      {/* 🔥 PREMIUM PARALLAX BANNER WITH PARTICLES + TILT TEXT */}
      {/* ------------------------------------------------------ */}
      <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">

        {/* Parallax Background */}
        <motion.div style={{ y: bannerY }} className="absolute inset-0">
          <img
            src={assests.bannerImage}
            alt="Gallery Banner"
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </motion.div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black"></div>

        {/* ⭐ FLOATING PARTICLES ⭐ */}
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#f58020] rounded-full blur-sm opacity-60"
            initial={{
              x: Math.random() * 1400 - 700,
              y: Math.random() * 400 - 300,
              scale: Math.random() * 0.8 + 0.4,
            }}
            animate={{
              y: ["0%", "-25%", "0%"],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* ⭐ TILT-IN CINEMATIC TEXT ⭐ */}
        <motion.div
          initial={{ opacity: 0, rotateX: 45, y: 50 }}
          animate={{
            opacity: 1,
            rotateX: 0,
            y: 0,
          }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center text-center px-4"
        >
          <div className="drop-shadow-xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9 }}
              className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide"
            >
              Explore Our Creative Signage Gallery
            </motion.h1>

            {/* Gradient Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "150px" }}
              transition={{ delay: 0.9, duration: 1 }}
              className="h-[4px] mx-auto mt-4 rounded-full bg-gradient-to-r from-[#f58020] to-[#d4550d]"
            />

            {/* Sub-caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="text-gray-200 mt-5 text-base sm:text-lg tracking-wide"
            >
              A showcase of our finest indoor & outdoor branding projects.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* 🔥 GALLERY SECTION */}
      {/* ------------------------------------------------------ */}
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="relative w-full bg-black text-gray-300 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
              Our Work Showcase
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-center text-4xl sm:text-5xl lg:text-6xl font-black"
          >
            Project{" "}
            <span className="bg-gradient-to-r from-[#f58020] via-[#ff9a33] to-[#d4550d] bg-clip-text text-transparent">
              Gallery
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
}

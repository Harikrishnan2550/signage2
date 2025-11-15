import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export default function GalleryPage() {
  const [selected, setSelected] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "start 0.3"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  const images = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    "https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80",
    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
  ];

  const openLightbox = (img, index) => {
    setSelected(img);
    setSelectedIndex(index);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (selectedIndex + 1) % images.length;
    setSelectedIndex(newIndex);
    setSelected(images[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelected(images[newIndex]);
  };

  return (
    <motion.section 
      ref={sectionRef}
      style={{ opacity, y }}
      className="relative w-full bg-black text-gray-300 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      </div>

      {/* Orange glows */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#f58020]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#d4550d]/10 rounded-full blur-3xl"></div>

      {/* Top accent line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#f58020] to-transparent origin-left"
      ></motion.div>

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
        <div className="text-center mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          >
            Project{" "}
            <motion.span 
              className="inline-block bg-gradient-to-r from-[#f58020] via-[#ff8f2c] to-[#d4550d] bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Gallery
            </motion.span>
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="mt-4 h-1 w-32 bg-gradient-to-r from-[#f58020] via-[#ff8f2c] to-[#d4550d] rounded-full mx-auto"
          ></motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-400 text-center text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed"
        >
          Explore our portfolio of premium signage works that transform spaces and elevate brand identities.
        </motion.p>

        {/* Gallery Grid */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="relative cursor-pointer rounded-2xl overflow-hidden border border-white/10 shadow-xl h-64 md:h-72"
                onClick={() => openLightbox(img, index)}
              >
                {/* Orange gradient hover border */}
                <div className="absolute -inset-[1px] bg-gradient-to-br from-[#f58020]/50 via-[#ff8f2c]/40 to-[#d4550d]/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                <div className="relative h-full bg-black rounded-2xl overflow-hidden">

                  {/* Orange glow hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#f58020]/30 via-[#ff8f2c]/20 to-[#d4550d]/30 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 z-10"
                  ></motion.div>

                  <motion.img
                    src={img}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Zoom icon */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-center justify-center z-20"
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20"
                    >
                      <ZoomIn className="w-8 h-8 text-white" />
                    </motion.div>
                  </motion.div>

                  {/* Shine */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  ></motion.div>

                  {/* Bottom orange bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#f58020] to-[#d4550d] origin-left z-30"
                  ></motion.div>

                  {/* Number */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-black/60 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/10 z-30">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-50 px-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-[#f58020]/30 hover:bg-[#f58020]/70 transition-colors z-50"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 z-50"
            >
              <span className="text-white text-sm font-semibold">
                {selectedIndex + 1} / {images.length}
              </span>
            </motion.div>

            {/* Prev Button */}
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevImage}
              className="absolute left-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all z-50"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </motion.button>

            {/* Next */}
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextImage}
              className="absolute right-6 w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all z-50"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </motion.button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.7, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.7, rotateY: -90 }}
              className="relative max-w-6xl w-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#f58020]/30 via-[#ff8f2c]/30 to-[#d4550d]/30 blur-3xl"></div>

              <img
                src={selected}
                className="relative w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/20"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none"></div>
    </motion.section>
  );
}

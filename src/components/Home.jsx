// import { motion, useScroll, useTransform } from "framer-motion";
// import assests from "../assets/assests";
// import { useState, useEffect } from "react";

// export default function Home({ onNav }) {
//   const { scrollY } = useScroll();
//   const y = useTransform(scrollY, [0, 500], [0, 150]);
//   const opacity = useTransform(scrollY, [0, 300], [1, 0]);

//   const line1 = "Kochi’s Trusted";
//   const line2 = "Signage & Branding Experts";

//   // Looping typing states
//   const [typed, setTyped] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     let speed = isDeleting ? 80 : 90;

//     const type = () => {
//       if (!isDeleting) {
//         // Typing forward
//         if (index < line2.length) {
//           setTyped(line2.substring(0, index + 1));
//           setIndex(index + 1);
//         } else {
//           // Pause at full text
//           setTimeout(() => setIsDeleting(true), 1200);
//         }
//       } else {
//         // Deleting
//         if (index > 0) {
//           setTyped(line2.substring(0, index - 1));
//           setIndex(index - 1);
//         } else {
//           // Finished deleting → start again
//           setIsDeleting(false);
//         }
//       }
//     };

//     const timer = setTimeout(type, speed);

//     return () => clearTimeout(timer);
//   }, [index, isDeleting]);

//   return (
//     <section className="w-full min-h-screen relative overflow-hidden">
//       {/* VIDEO BACKGROUND */}
//       <motion.div className="absolute inset-0" style={{ y }}>
//         <video
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
//           autoPlay
//           loop
//           muted
//           playsInline
//         >
//           <source src={assests.banner} type="video/mp4" />
//         </video>
//       </motion.div>

//       {/* OVERLAY */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>

//       {/* GRID */}
//       <div className="absolute inset-0 opacity-10">
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
//             backgroundSize: "50px 50px",
//           }}
//         />
//       </div>

//       {/* CONTENT */}
//       <motion.div
//         className="relative z-10 min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-0 lg:ml-[120px]"
//         style={{ opacity }}
//       >
//         <div className="mt-20 sm:mt-24 md:mt-28"></div>

//         {/* ======================== HEADING ======================== */}
//         <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight max-w-4xl">
//           {/* FIRST LINE — Typing once */}
//           {line1.split("").map((char, i) => (
//             <motion.span
//               key={"l1-" + i}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: i * 0.1 }}
//             >
//               {char}
//             </motion.span>
//           ))}

//           <br />

//           {/* SECOND LINE — REAL TYPEWRITER LOOP */}
//           <span className="font-['League_Spartan'] font-extrabold tracking-tight bg-gradient-to-r from-[#f58020] via-red-600 to-red-700 bg-clip-text text-transparent">
//             {typed}
//           </span>

//           {/* Blinking cursor */}
//           <span
//             className="inline-block ml-1"
//             style={{
//               borderRight: "4px solid #f58020",
//               height: "1em",
//               animation: "blink 0.8s infinite",
//             }}
//           ></span>
//         </h1>

//         {/* ======================== SUB HEADING ======================== */}
//         <motion.span
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: typed.length > 0 ? 1 : 0 }}
//           transition={{ duration: 0.8 }}
//           className="block text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mt-4"
//         >
//           Advanced Technology. Expert Craftsmanship.
//         </motion.span>

//         {/* ======================== PARAGRAPH ======================== */}
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: typed.length > 0 ? 1 : 0 }}
//           transition={{ duration: 0.7, delay: 0.2 }}
//           className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
//         >
//           We make top-notch signs for inside and outside. They make your brand
//           look better. We handle everything from start to finish.
//         </motion.p>

//         {/* ======================== CTA BUTTONS ======================== */}
//         <motion.div
//           initial={{ opacity: 0, y: 25 }}
//           animate={{ opacity: typed.length > 0 ? 1 : 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//           className="mt-8 flex flex-wrap gap-4"
//         >
//           {/* PRIMARY BUTTON */}
//           <motion.button
//             onClick={() => onNav("contact")}
//             className="group relative px-6 py-3 bg-gradient-to-r from-[#f58020] to-red-700 text-white font-bold text-sm rounded-lg overflow-hidden shadow-2xl"
//             whileHover={{
//               scale: 1.04,
//               boxShadow: "0 18px 36px rgba(245,128,32,0.28)",
//             }}
//             whileTap={{ scale: 0.98 }}
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               Get a Quote
//               <motion.span
//                 animate={{ x: [0, 5, 0] }}
//                 transition={{ repeat: Infinity, duration: 1.5 }}
//               >
//                 →
//               </motion.span>
//             </span>
//             <motion.div
//               className="absolute inset-0 bg-gradient-to-r from-red-700 to-[#f58020]"
//               initial={{ x: "-100%" }}
//               whileHover={{ x: 0 }}
//               transition={{ duration: 0.3 }}
//             />
//           </motion.button>

//           {/* SECONDARY BUTTON */}
//           <motion.button
//             onClick={() => onNav("gallery")}
//             className="group px-6 py-3 border-2 border-gray-600 text-gray-300 hover:border-[#f58020] hover:text-white font-semibold text-sm rounded-lg backdrop-blur-sm transition-all duration-300"
//             whileHover={{ scale: 1.04 }}
//             whileTap={{ scale: 0.98 }}
//           >
//             View Portfolio
//             <motion.span
//               className="inline-block ml-2"
//               whileHover={{ rotate: 20 }}
//             >
//               ↗
//             </motion.span>
//           </motion.button>
//         </motion.div>
//       </motion.div>

//       {/* Cursor blinking keyframes */}
//       <style>{`
//         @keyframes blink {
//           0%, 50% { opacity: 1; }
//           50%, 100% { opacity: 0; }
//         }
//       `}</style>
//     </section>
//   );
// }

import { motion, useScroll, useTransform } from "framer-motion";
import assests from "../assets/assests";
import { useState, useEffect } from "react";

export default function Home({ onNav }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const line1 = "Kochi’s Trusted";
  const line2 = "Signage & Branding Experts";

  // Typing effect states
  const [typed, setTyped] = useState("");
  const [index, setIndex] = useState(0);
  const [completedTyping, setCompletedTyping] = useState(false);

  // ---- Typing Effect (ONE TIME) ----
  useEffect(() => {
    if (completedTyping) return;

    if (index < line2.length) {
      const timeout = setTimeout(() => {
        setTyped(line2.substring(0, index + 1));
        setIndex(index + 1);
      }, 90);
      return () => clearTimeout(timeout);
    } else {
      setCompletedTyping(true);
    }
  }, [index, completedTyping]);

  return (
    <section className="w-full min-h-screen relative overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <video
          className="absolute inset-0 w-full h-full object-cover brightness-[0.7]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={assests.banner} type="video/mp4" />
        </video>
      </motion.div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black"></div>

      {/* GRID LINES */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* MAIN CONTENT */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 sm:px-8 lg:px-0 lg:ml-[120px]"
        style={{ opacity }}
      >
        <div className="mt-20 sm:mt-24 md:mt-28"></div>

        {/* ======================== HEADING ======================== */}
        <h1 className="text-white text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight max-w-4xl">

          {/* FIRST LINE */}
          {line1.split("").map((char, i) => (
            <motion.span
              key={"l1-" + i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {char}
            </motion.span>
          ))}

          <br />

          {/* SECOND LINE — GLASS TEXT + GOLD SWEEP */}
        {/* ULTRA CINEMATIC TEXT BLOCK */}
<span className="relative inline-block select-none">

  {/* BASE GLASS + METAL HYBRID LAYER */}
  <span
    className="block"
    style={{
      WebkitTextFillColor: "transparent",
      WebkitTextStroke: "1px rgba(255,255,255,0.7)",

      /* CINEMATIC GLASS + METAL DEPTH */
      textShadow: `
        0 3px 4px rgba(0,0,0,0.8),
        0 8px 14px rgba(0,0,0,0.65),
        0 18px 32px rgba(0,0,0,0.55),
        inset 0 2px 6px rgba(255,255,255,0.45),
        inset 0 -4px 8px rgba(255,255,255,0.12),
        0 0 18px rgba(255,255,255,0.25),
        0 0 38px rgba(255,255,255,0.18)
      `,

      filter: `
        drop-shadow(0 4px 26px rgba(0,0,0,0.75))
        drop-shadow(0 0 36px rgba(255,255,255,0.15))
      `,
    }}
  >
    {typed}
  </span>

  {/* GOLDEN BEAM + ANAMORPHIC LENS SWEEP */}
  {completedTyping && (
    <motion.span
      className="absolute inset-0 pointer-events-none"
      animate={{ backgroundPosition: ["-350% 0", "350% 0"] }}
      transition={{
        duration: 4.8,
        repeat: Infinity,
        repeatDelay: 1.2,
        ease: "easeInOut",
      }}
      style={{
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",

        /* ULTRA CINEMATIC GOLD SWEEP */
        backgroundImage: `
          linear-gradient(
            100deg,
            rgba(0,0,0,0) 0%,
            rgba(0,0,0,0) 32%,

            #3e1d02 44%,   /* dark gold core */
            #8f4a10 48%,   /* deep amber */
            #f58020 52%,   /* MAIN gold flare */
            #ffb04d 54%,   /* white-hot streak */
            #f58020 56%,   /* warm falloff */
            #8f4a10 60%,
            #3e1d02 64%,

            rgba(0,0,0,0) 78%,
            rgba(0,0,0,0) 100%
          )
        `,
        backgroundSize: "350% 100%",

        filter: `
          drop-shadow(0 0 38px rgba(245,128,32,0.55))
          drop-shadow(0 0 68px rgba(245,128,32,0.45))
          drop-shadow(0 0 110px rgba(245,128,32,0.25))
        `,

        mixBlendMode: "screen",
      }}
    >
      {typed}
    </motion.span>
  )}

  {/* CINEMATIC FLARE GLOW (constant subtle pulse) */}
  {completedTyping && (
    <motion.span
      className="absolute inset-0 pointer-events-none"
      animate={{ opacity: [0.25, 0.4, 0.25] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",

        backgroundImage: `
          radial-gradient(circle at 50% 40%, rgba(255,160,80,0.25), transparent 55%)
        `,

        filter: `
          blur(10px)
          drop-shadow(0 0 45px rgba(245,128,32,0.25))
        `,
        mixBlendMode: "screen",
      }}
    >
      {typed}
    </motion.span>
  )}
</span>

        </h1>

        {/* ======================== SUB HEADING ======================== */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: completedTyping ? 1 : 0 }}
          transition={{ duration: 0.8 }}
          className="block text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mt-4"
        >
          Advanced Technology. Expert Craftsmanship.
        </motion.span>

        {/* ======================== PARAGRAPH ======================== */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: completedTyping ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          We make top-notch signs for inside and outside. They make your brand look
          better. We handle everything from start to finish.
        </motion.p>

        {/* ======================== CTA BUTTONS ======================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: completedTyping ? 1 : 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-4"
        >

          {/* PRIMARY BUTTON */}
          <motion.button
            onClick={() => onNav("contact")}
            className="group relative px-6 py-3 bg-gradient-to-r from-[#f58020] to-red-700 text-white font-bold text-sm rounded-lg overflow-hidden shadow-2xl"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 18px 36px rgba(245,128,32,0.28)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Get a Quote
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-red-700 to-[#f58020]"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          {/* SECONDARY BUTTON */}
          <motion.button
            onClick={() => onNav("gallery")}
            className="group px-6 py-3 border-2 border-gray-600 text-gray-300 hover:border-[#f58020] hover:text-white font-semibold text-sm rounded-lg backdrop-blur-sm transition-all duration-300"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            View Portfolio
            <motion.span className="inline-block ml-2" whileHover={{ rotate: 20 }}>
              ↗
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Blinking Cursor Keyframes */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}

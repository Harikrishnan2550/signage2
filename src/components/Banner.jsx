import { motion, useScroll, useTransform } from "framer-motion";
import assests from "../assets/assests";

export default function Banner() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 120]); // smooth parallax

  return (
    <section className="relative w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] overflow-hidden">

      {/* Background Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0"
      >
        <img 
          src={assests.bannerImage}
          alt="Page Banner"
          className="w-full h-full object-cover brightness-[1.5]"
        />
      </motion.div>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black"></div>

      {/* Smooth Fade-in Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0"
      ></motion.div>

    </section>
  );
}

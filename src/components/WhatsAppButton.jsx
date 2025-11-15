import { motion } from "framer-motion";

export default function WhatsAppButton({ phone = "918714302550" }) {
  const defaultMessage = "Hi, I want to see the product details";
  const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <motion.a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[2000] 
                 bg-[#25D366] text-white 
                 w-16 h-16 rounded-full flex items-center justify-center 
                 shadow-[0_10px_30px_rgba(0,0,0,0.35)] cursor-pointer"
      animate={{
        y: [0, -10, 0],
        boxShadow: [
          "0 10px 30px rgba(0,0,0,0.35)",
          "0 15px 35px rgba(0,0,0,0.45)",
          "0 10px 30px rgba(0,0,0,0.35)",
        ]
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-8 h-8"
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.a>
  );
}

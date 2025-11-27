import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/bgimage2.jpg";

const Hero = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/917034344848",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden bg-[#173252]"
    >
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(10, 25, 50, 0.65), rgba(10, 25, 50, 0.45)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-block"
        >
          <span className="text-[#FFD700] text-lg md:text-xl font-medium uppercase tracking-widest"></span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white mb-2 leading-tight"
        >
          Skywyn
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl text-[#FFD700] font-light tracking-[.25em] uppercase mb-8"
        >
          Developers
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-xl md:text-2xl text-white/90 mb-10 font-light"
        >
          From Land to Legacy
        </motion.p>

        {/* WhatsApp Contact Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
        >
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-black font-semibold text-lg px-10 py-6 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          >
            Contact Us on WhatsApp
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-white/70" size={36} />
      </motion.div>
    </section>
  );
};

export default Hero;

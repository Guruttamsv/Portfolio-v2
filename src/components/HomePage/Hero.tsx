import React, { useState, useEffect } from "react";
import "../CSS/HomePage/Hero.css";
import { motion } from "framer-motion";
import AnimatedText from "../HomePage/AnimatedText"; 

const Hero: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 479);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 479);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="hero-container">
      <AnimatedText />
      <motion.div
        className="hero-image"
        initial={{ x: "3vw" }}
        animate={{ x: "0vw" }}
        transition={{
          duration: 12,
        }}
      />
      <motion.div
        className="scroll-text"
        initial={{ opacity: 0, y: 0 }}
        animate={{
          opacity: [0, 1, 1, 0], // Fade in, stay visible, then fade out
          y: [0, -20, -20, -20], // Move upward further and stay there during fade out
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeOut",
          delay: 0.5,
        }}
      >
        SCROLL DOWN
      </motion.div>
    </div>
  );
};

export default Hero;

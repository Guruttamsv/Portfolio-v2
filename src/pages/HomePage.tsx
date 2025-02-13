/* src/pages/HomePage.tsx */
import React from "react";
import Ticker from "../components/HomePage/Ticker";
import TypingEffect from "../components/HomePage/Typed";
import Hero from "../components/HomePage/Hero";
import "../pagesCSS/HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="home-grid-container">
      <div className="ticker-area">
        <Ticker />
      </div>
      <div className="hero-area">
        <Hero />
      </div>
      <div className="typing-area">
        <TypingEffect />
      </div>
    </div>
  );
};

export default HomePage;

import React, { useState, useEffect } from "react";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import IconsPage from "./pages/IconsPage";
import ContactPage from "./pages/ContactPage";
import ParallaxText from "./components/Layout/Parralaxtext";
import "./App.css";

const App: React.FC = () => {
  const [isParallaxActive, setIsParallaxActive] = useState(true); // Always true for continuous parallax effect

  return (
    <div className="App">
      <NavBar />
      <main>
        <section id="about" className="fullpage-section about-background">
          <HomePage />
        </section>
        <section id="work" className="fullpage-section work-background">
          <WorkPage />
          <ParallaxText
            baseVelocity={1}
            isActive={isParallaxActive}
            style={{ top: "10px" }}
          >
            Scroll
          </ParallaxText>
          <ParallaxText
            baseVelocity={-1}
            isActive={isParallaxActive}
            style={{
              top: "55px",
              filter: "blur(2px)",
              color: "rgb(130, 101, 215)",
            }}
          >
            Tabs
          </ParallaxText>
        </section>
        <section id="whatsnext" className="fullpage-section whyme-background">
          <IconsPage />
          <ParallaxText
            baseVelocity={3}
            isActive={isParallaxActive}
            style={{ top: "10px" }}
          >
            Click
          </ParallaxText>
          <ParallaxText
            baseVelocity={-1}
            isActive={isParallaxActive}
            style={{
              top: "55px",
              filter: "blur(2px)",
              color: "rgb(130, 101, 215)",
            }}
          >
            icon
          </ParallaxText>
        </section>
        <section id="contact" className="fullpage-section contact-background">
          <ContactPage />
        </section>
      </main>
    </div>
  );
};

export default App;

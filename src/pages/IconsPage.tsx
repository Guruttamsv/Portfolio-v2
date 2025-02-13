import React, { useEffect, useRef, useState } from "react";
import "../pagesCSS/IconsPage.css";
import FloatingIcons from "../components/IconsPage/FloatingIcons";

const IconsPage: React.FC = () => {
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (subHeadingRef.current) {
              const letters = subHeadingRef.current.querySelectorAll(".letter");
              letters.forEach((letter, index) => {
                setTimeout(() => {
                  letter.classList.add("show");
                }, index * 100); // Adjust timing for the effect
              });
            }
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.1 }
    );

    if (subHeadingRef.current) {
      observer.observe(subHeadingRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="icons-page-container">
      <div className="sub-heading" ref={subHeadingRef}>
        {"Why Me".split("").map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
      </div>
      <div className="icons-container">
        <FloatingIcons />
      </div>
    </div>
  );
};

export default IconsPage;

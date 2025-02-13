import React, { useEffect, useRef } from "react";
import WorkGrid from "../components/WorkPage/WorkGrid";
import TopTabs from "../components/WorkPage/TopTabs";
import "../pagesCSS/WorkPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const WorkPage: React.FC = () => {
  const subHeadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const subHeadingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (subHeadingRef.current) {
              const letters = subHeadingRef.current.querySelectorAll(".letter");
              letters.forEach((letter, index) => {
                setTimeout(() => {
                  letter.classList.add("show");
                }, index * 100);
              });
            }
            subHeadingObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (subHeadingRef.current) {
      subHeadingObserver.observe(subHeadingRef.current);
    }

    return () => {
      subHeadingObserver.disconnect();
    };
  }, []);

  const handleGithubClick = () => {
    window.open("https://github.com/Guruttamsv?tab=repositories", "_blank");
  };

  return (
    <div className="work-page-container">
      <div className="sub-heading" ref={subHeadingRef}>
        {"My Work".split("").map((char, index) => (
          <span key={index} className="letter">
            {char}
          </span>
        ))}
        <button
          className="github-button"
          onClick={handleGithubClick}
          aria-label="View GitHub Repositories"
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
      </div>

      {/* Separate container for top tabs and work grid */}
      <div className="tabs-grid-container">
        <TopTabs />
        <WorkGrid />
      </div>
    </div>
  );
};

export default WorkPage;

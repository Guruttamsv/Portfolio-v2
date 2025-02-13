import React, { useState } from "react";
import "../CSS/HomePage/Ticker.css";

const Ticker: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const bio =
    "I'm a highly motivated and results-oriented Computer Science graduate with a specialization in Artificial Intelligence. My passion lies in crafting innovative software solutions and leveraging cutting-edge technologies to solve complex problems. I have a proven track record in software development, testing, and machine learning, and I'm eager to apply my skills in a dynamic and challenging environment. Throughout my academic journey and professional experiences, I've consistently demonstrated a strong aptitude for learning and adapting to new technologies. I'm proficient in multiple programming languages, including Python, Java, and C#, and I've successfully designed and implemented automated test cases using Selenium, significantly improving test coverage and efficiency. My final year project, focused on developing a conversational AI system for movie retrieval, allowed me to delve into the fascinating world of natural language processing and large language models. This project showcased my ability to combine machine learning techniques with user-friendly interfaces to create practical and impactful solutions. In addition to my technical skills, I'm a dedicated team player with strong communication and leadership abilities. I thrive in collaborative environments and enjoy mentoring and guiding others. My internship at Transputec Ltd. provided me with valuable hands-on experience in a professional setting, where I honed my skills in software development, testing, and project management. I'm excited to embark on a career in software development, where I can contribute my skills and passion to building innovative and impactful solutions. I'm confident that my strong technical foundation, problem-solving abilities, and eagerness to learn will enable me to excel in this field.";

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="ticker-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`ticker-text ${isHovered ? "hovered" : ""}`}>
        {bio}
      </div>
    </div>
  );
};

export default Ticker;

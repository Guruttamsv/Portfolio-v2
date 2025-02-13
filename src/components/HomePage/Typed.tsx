import React from "react";
import { ReactTyped } from "react-typed";
import "../CSS/HomePage/Typed.css"; // Import the CSS for styling


const TypingEffect: React.FC = () => {
  return (
    <div className="typing-container">
      <div className="typing-text">
        <ReactTyped
          strings={[
            "Software<br/>Developer",
            "Software<br/>Engineer",
            "Web<br/>Developer",
            "Automation<br/>Test Engineer",
          ]}
          typeSpeed={80} // Speed of typing
          backSpeed={50} // Speed of backspacing
          loop // Loop the typing effect
          backDelay={1500} // Delay before starting to backspace
          startDelay={500} // Delay before starting to type
          showCursor // Show the blinking cursor
          cursorChar="|" // Character to use for the cursor
        />
      </div>
    </div>
  );
};

export default TypingEffect;

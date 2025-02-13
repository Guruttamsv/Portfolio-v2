import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../CSS/WorkPage/WorkGrid.css";


const cardData = [
  {
    id: 1,
    title: "Sustainable Clothing - Shopping Website",
    note: "Node.js + Vanilla JS + CSS",
    description: `
      This sustainable clothing website was developed as a group project in the second year of study, focusing on agile web development and team collaboration. The website promotes eco-friendly fashion, allowing users to shop sustainably, read articles about environmental impact, and engage in a user-driven community. Key features include a shopping cart, a review page, and educational articles on sustainable practices. The frontend was built using plain HTML and vanilla JavaScript, with a Node.js backend to manage server-side functionality. As project lead, I conducted sprints, managed the GitHub repository, and oversaw team contributions to ensure integration into a cohesive final product. My main contribution involved developing the review page, where users can post feedback and read others' insights. Throughout the project, I gained leadership skills in managing the backlog, organizing sprints, and guiding the team to hit key deadlines. This project received a ‘B’ grade, with positive feedback on functionality and design, and taught me the importance of maintaining structure and communication within a team. In future, I plan to implement a larger framework to improve UI design and animation, enabling a more dynamic user experience. 
    `,
    imageUrl: "src/assets/1.webp",
  },
  {
    id: 2,
    title: "Portfolio Website",
    note: "React + Vite + TypeScript + CSS + Framer Motion + Spline",
    description: `
      I created this portfolio website to showcase my skills and projects in web development. Built with React, Vite, and TypeScript, the site serves as a personal brand statement, providing potential employers and clients with insight into my capabilities. Key features include a dynamic ticker that displays descriptions on hover, animations that enhance user engagement, and typing effects for a personalized touch. Spline was used for 3D animations, while react-scroll and react-effects handled smooth transitions, creating an interactive and visually appealing experience. The project was developed using a modular approach, with components individually crafted and assembled for optimal responsiveness across devices. Challenges included implementing complex animations and ensuring seamless design across mobile screens. As the sole developer, I was responsible for every phase, from design to deployment, and used GitHub Pages for hosting. I’ve received positive feedback on the design and interactivity, which aligns with usability and accessibility principles I learned in courses. Moving forward, I plan to replace Spline with a lighter framework and deploy the site on a faster, more scalable server. This project reinforced my understanding of the importance of continuous learning and adaptability in mastering new technologies.
    `,
    imageUrl: "src/assets/2.webp",
  },
  {
    id: 3,
    title: "2D Platform Game - HoneyBear",
    note: "Unity + C#",
    description: `
      HoneyBear is a 2D platformer game that I developed as my final project for the Digital Media and Games module. In the game, players control a bear character that must navigate through obstacles, defeat enemies, and ultimately face a final boss, the Queen Bee, to win the honey pot. The game includes a fully developed environment with backgrounds, platforms, and interactive elements. The bear has multiple animations for different actions such as walking, flying, and fighting, which adds depth to gameplay. Players face bees and other enemies and can combat them using kicks and punches, with UI elements tracking lives and offering hints. Developed in Unity using custom assets, animations, and scripts, I created and edited sprites for character actions, focusing on character interactions and collision detection to ensure smooth gameplay. As the sole developer, I managed everything from initial concept to final testing, applying iterative debugging for optimal character controls. The project received an ‘A’ for its creativity and polished execution, with feedback highlighting the engaging gameplay and well-balanced mechanics. Since this project, I’ve applied these skills to VR development, where I plan to explore creating immersive VR games as a personal interest.
    `,
    imageUrl: "src/assets/3.webp",
  },
  {
    id: 4,
    title: "Live Horse Race - Betting Website",
    note: "Django + HTML + CSS + JavaScript + MySQL",
    description: `
      Developed as my high school final project, this website allows users to place bets on virtual horse races, simulating a real-time race experience. This project introduced me to web development frameworks and technologies, setting the foundation for my later projects. The site allows users to choose horses, place bets, and watch a simulated race displayed in the UI. The race simulation uses randomized values for horse speeds and positions, offering a unique outcome each time. Built using Django with a MySQL database, the site’s backend manages user accounts, bets, and race results, while JavaScript enables real-time updates. My role involved designing the race logic and implementing Django’s backend functionalities, with a focus on data management and race dynamics. Guiding my team through this project, I took charge of sprint meetings and managed deadlines to ensure we delivered a fully functional, polished product. The project received an A+ for originality and technical complexity, marking an early milestone in web development and leadership. In the future, I plan to enhance the race simulation with real-time data and further refine the user experience for a more immersive feel.
    `,
    imageUrl: "src/assets/4.webp",
  },
  {
    id: 5,
    title: "Face Recognition / Stock Prediction",
    note: "Python + OpenCV / PyTorch + ARIMA Model",
    description: `
      This project consists of two main modules: face recognition using OpenCV and stock price prediction using the ARIMA model. In the face recognition module, I developed programs to detect faces in static images, videos, and live webcam feeds, with real-time facial detection marking faces with bounding boxes. The stock prediction module analyzes historical stock data to forecast prices using ARIMA, with daily and intraday analyses on Tesla and Apple stocks. Implemented in Python, OpenCV manages face detection, while yfinance, pandas, and statsmodels support stock data analysis and ARIMA forecasting. Challenges included managing diverse data sources and optimizing the ARIMA model for accuracy, with adjustments in feature engineering and model tuning. I handled all aspects of the project, from data collection to visualization, providing insights into both security applications and investment analysis. Through this project, I developed skills in data science and model optimization, with plans to integrate these methods into larger projects that apply machine learning to real-world problems.
    `,
    imageUrl: "src/assets/5.webp",
  },
  {
    id: 6,
    title: "Sentiment Analysis / Text Summarization",
    note: "Python + TensorFlow + Word2Vec",
    description: `
      This project focuses on natural language processing, specifically sentiment analysis and text summarization. For sentiment analysis, I used Word2Vec embeddings and a Long Short-Term Memory (LSTM) network to classify movie reviews as positive or negative. The project included text preprocessing, data cleaning, and model building, achieving high accuracy in sentiment prediction using IMDB data. The text summarization module uses the Mistral-7B-Instruct model via Hugging Face to summarize lengthy PDFs, suitable for extracting essential information from articles or research papers. I developed custom prompts and implemented recursive text splitting to handle large documents. These projects were built in Python using TensorFlow and Keras for the LSTM model and the Hugging Face Transformers library for summarization. Through these projects, I gained experience in NLP techniques and model optimization, and I plan to integrate these capabilities into larger NLP projects in the future, focusing on applications in content analysis and information retrieval.
    `,
    imageUrl: "src/assets/6.webp",
  },
  {
    id: 7,
    title: "Calculator",
    note: "Java + Java Swing (GUI)",
    description: `
      This advanced calculator was developed as a first-year project, aiming to provide a fully functional application with ten distinct operations, including hexadecimal-to-decimal conversion. The project was designed as a GUI application using Java Swing to offer a user-friendly interface for basic arithmetic and specialized functions. Java was used to implement each operation, while Java Swing handled the interface, allowing for intuitive user interaction through buttons and keyboard entries. Challenges included managing user input effectively, which I addressed by implementing error handling and testing Swing’s event-handling capabilities. As the team lead, I designed and developed the interface and ensured integration of all functions into a cohesive application. The project received an A+ and third place among competitors, with praise for its intuitive GUI and advanced features.
    `,
    imageUrl: "src/assets/7.webp",
  },
  {
    id: 8,
    title: "Pneumonia Detection / Satellite Image Classification",
    note: "TensorFlow Keras + Python + CNN / PyTorch + CNN",
    description: `
      This project consists of two image classification applications: a pneumonia detection model and satellite image classification. For pneumonia detection, I built a CNN using TensorFlow and Keras to classify X-ray images into "pneumonia" or "normal" categories, focusing on data preprocessing, model design, and training. The satellite image classification model, developed using PyTorch, processes land cover images to analyze geographic patterns. The CNN model in each application includes convolutional, max pooling, and dropout layers to improve accuracy and reduce overfitting. Through this project, I gained experience in handling medical and environmental data, optimizing CNN architectures, and applying transfer learning to improve model performance. This work supports future applications in medical diagnostics and environmental monitoring, where I plan to further explore CNN applications in classification and prediction.
    `,
    imageUrl: "src/assets/8.webp",
  },
  // Added "Coming Soon" cards with blurred images
  {
    id: 9,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "src/assets/9.png", // Reuse images from existing ones
  },
  {
    id: 10,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "src/assets/10.png",
  },
  {
    id: 11,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "src/assets/11.png",
  },
  {
    id: 12,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "src/assets/12.png",
  },
  {
    id: 13,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "src/assets/13.png",
  },
];




const WorkGrid: React.FC = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  const handleWheel = (event: React.WheelEvent) => {
    if (ref.current) {
      event.preventDefault();
      ref.current.scrollLeft += event.deltaY;
    }
  };

  const handleMouseEnter = () => {
    document.body.style.overflowY = "hidden";
  };

  const handleMouseLeave = () => {
    document.body.style.overflowY = "auto";
  };

  useEffect(() => {
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div id="work-container">
      <div id="circle-container">
        <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollXProgress }}
          />
        </svg>
      </div>

      <div id="grids-container">
        <ul
          id="horizontal-tabs"
          ref={ref}
          onWheel={handleWheel}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {cardData.map((card, index) => (
            <motion.li
              key={index}
              className={`card ${clickedIndex === index ? "expanded" : ""}`}
              onClick={() => handleClick(index)}
            >
              <div className="card-image">
                <img src={card.imageUrl} alt={`Card ${index + 1}`} />
              </div>
              <div className="card-overlay">
                {clickedIndex === index ? (
                  <p>{card.description}</p> // Show description when expanded
                ) : (
                  <>
                    <h3>{card.title}</h3> {/* Actual Title */}
                    <p className="note">{card.note}</p> {/* Actual Note */}
                  </>
                )}
              </div>
              <div className="arrow" /> {/* Arrow symbol */}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkGrid;

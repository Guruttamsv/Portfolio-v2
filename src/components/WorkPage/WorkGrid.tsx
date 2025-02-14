import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll } from "framer-motion";
import "../CSS/WorkPage/WorkGrid.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const handleGithubClick = () => {
  window.open("https://github.com/Guruttamsv?tab=repositories", "_blank");
};

const cardData = [
  {
    id: 1,
    title: "Sustainable Clothing - Shopping Website",
    note: "Node.js + Vanilla JS + CSS",
    description: `
      This sustainable clothing website was developed as a group project in the second year of study, focusing on agile web development and team collaboration. The website promotes eco-friendly fashion, allowing users to shop sustainably, read articles about environmental impact, and engage in a user-driven community. Key features include a shopping cart, a review page, and educational articles on sustainable practices. The frontend was built using plain HTML and vanilla JavaScript, with a Node.js backend to manage server-side functionality. As project lead, I conducted sprints, managed the GitHub repository, and oversaw team contributions to ensure integration into a cohesive final product. My main contribution involved developing the review page, where users can post feedback and read others' insights. Throughout the project, I gained leadership skills in managing the backlog, organizing sprints, and guiding the team to hit key deadlines. This project received a ‘B’ grade, with positive feedback on functionality and design, and taught me the importance of maintaining structure and communication within a team. In future, I plan to implement a larger framework to improve UI design and animation, enabling a more dynamic user experience. 
    `,
    imageUrl: "./assets/1.webp",
  },
  {
    id: 2,
    title: "Portfolio Website",
    note: "React + Vite + TypeScript + CSS + Framer Motion + Spline",
    description: `
      I created this portfolio website to showcase my skills and projects in web development. Built with React, Vite, and TypeScript, the site serves as a personal brand statement, providing potential employers and clients with insight into my capabilities. Key features include a dynamic ticker that displays descriptions on hover, animations that enhance user engagement, and typing effects for a personalized touch. Spline was used for 3D animations, while react-scroll and react-effects handled smooth transitions, creating an interactive and visually appealing experience. The project was developed using a modular approach, with components individually crafted and assembled for optimal responsiveness across devices. Challenges included implementing complex animations and ensuring seamless design across mobile screens. As the sole developer, I was responsible for every phase, from design to deployment, and used GitHub Pages for hosting. I’ve received positive feedback on the design and interactivity, which aligns with usability and accessibility principles I learned in courses. Moving forward, I plan to replace Spline with a lighter framework and deploy the site on a faster, more scalable server. This project reinforced my understanding of the importance of continuous learning and adaptability in mastering new technologies.
    `,
    imageUrl: "./assets/2.webp",
  },
  {
    id: 3,
    title: "2D Platform Game - HoneyBear",
    note: "Unity + C#",
    description: `
      HoneyBear is a 2D platformer game that I developed as my final project for the Digital Media and Games module. In the game, players control a bear character that must navigate through obstacles, defeat enemies, and ultimately face a final boss, the Queen Bee, to win the honey pot. The game includes a fully developed environment with backgrounds, platforms, and interactive elements. The bear has multiple animations for different actions such as walking, flying, and fighting, which adds depth to gameplay. Players face bees and other enemies and can combat them using kicks and punches, with UI elements tracking lives and offering hints. Developed in Unity using custom assets, animations, and scripts, I created and edited sprites for character actions, focusing on character interactions and collision detection to ensure smooth gameplay. As the sole developer, I managed everything from initial concept to final testing, applying iterative debugging for optimal character controls. The project received an ‘A’ for its creativity and polished execution, with feedback highlighting the engaging gameplay and well-balanced mechanics. Since this project, I’ve applied these skills to VR development, where I plan to explore creating immersive VR games as a personal interest.
    `,
    imageUrl: "./assets/3.webp",
  },
  {
    id: 4,
    title: "Live Horse Race - Betting Website",
    note: "Django + HTML + CSS + JavaScript + MySQL",
    description: `
      Developed as my high school final project, this website allows users to place bets on virtual horse races, simulating a real-time race experience. This project introduced me to web development frameworks and technologies, setting the foundation for my later projects. The site allows users to choose horses, place bets, and watch a simulated race displayed in the UI. The race simulation uses randomized values for horse speeds and positions, offering a unique outcome each time. Built using Django with a MySQL database, the site’s backend manages user accounts, bets, and race results, while JavaScript enables real-time updates. My role involved designing the race logic and implementing Django’s backend functionalities, with a focus on data management and race dynamics. Guiding my team through this project, I took charge of sprint meetings and managed deadlines to ensure we delivered a fully functional, polished product. The project received an A+ for originality and technical complexity, marking an early milestone in web development and leadership. In the future, I plan to enhance the race simulation with real-time data and further refine the user experience for a more immersive feel.
    `,
    imageUrl: "./assets/4.webp",
  },
  {
    id: 5,
    title: "Face Recognition",
    note: "Python + OpenCV",
    description: `
      Developed as part of a personal project, this face recognition system uses OpenCV’s pre-trained Haar Cascade Classifier to detect faces in static images, videos, and live webcam feeds. The project started with FaceDetectorPicture.py, which detects faces in a still image by converting it to grayscale and applying the classifier. It then expanded to FaceDetectorVideo, where it processes video frames to detect faces in real-time. Finally, FaceDetectorVideoCam takes it a step further by using the webcam to detect faces live. My main contributions included implementing the face detection logic, handling video streams, and working with real-time webcam data. This project enhanced my skills in computer vision and real-time processing, and I plan to explore facial recognition and improve detection accuracy in the future.`,
    imageUrl: "./assets/5.webp",
  },
  {
    id: 6,
    title: "Stock Prediction",
    note: "PyTorch + ARIMA Model",
    description: `
      Developed as a data science project, this system predicts stock prices using historical data and machine learning models. The project starts with collecting data for stocks like Tesla and Apple using yfinance and Alpha Vantage APIs. It then calculates key metrics like moving averages, price changes, and volatility. My main contribution involved building a model using ARIMA for time-series forecasting, where I trained and tested the model to predict future stock prices. I also visualized data trends using matplotlib. This project helped me enhance my skills in data analysis, time-series forecasting, and Python libraries for financial modeling. In the future, I plan to improve the prediction accuracy by exploring more complex models like LSTM.`,
    imageUrl: "./assets/6.webp",
  },
  {
    id: 7,
    title: "Sentiment Analysis",
    note: "Python + TensorFlow + Word2Vec",
    description: `
    In this project, I developed a Sentiment Analysis model using the IMDB dataset, where I first downloaded and decompressed the data, consisting of both positive and negative movie reviews. The data was preprocessed by cleaning the text, removing non-alphabetical characters, converting it to lowercase, and eliminating stopwords, while lemmatizing the words to retain their root forms. I then utilized the Gensim library to generate word embeddings using Word2Vec, detecting bigrams and trigrams to capture meaningful multi-word phrases. These embeddings were used to vectorize the reviews and pad the sequences for uniform input size. I then built a neural network using LSTM layers, which were trained on a subset of the dataset to classify the sentiment of the reviews. The model’s performance was evaluated using a test set, and I further tested the model by making predictions on custom reviews, classifying them as either positive or negative based on the sentiment detected. This project allowed me to explore text preprocessing, word embeddings, and deep learning techniques for sentiment classification. `,
    imageUrl: "./assets/7.webp",
  },
  {
    id: 8,
    title: "Text Summarization",
    note: "Python + Langcahin + Transformers",
    description: `
      In this project, I developed a text summarization model using the Hugging Face Transformers library along with LangChain. The first step was to install necessary libraries and configure the Mistral-7B model, which was used to generate summaries. I employed PyPDF2 to extract text from PDF files, providing an efficient way to handle document-based inputs. The text extracted from PDFs was then split into manageable chunks using a RecursiveCharacterTextSplitter to ensure that the model could process the content effectively without running into token limitations. For summarization, I utilized LangChain’s load_summarize_chain function with the map-reduce strategy to summarize the speech or text in chunks, then combined them for a comprehensive summary. Additionally, I customized prompt templates for chunk summarization and final aggregation, ensuring the output was both concise and meaningful. The entire process enabled the creation of a detailed yet compact summary of long speeches or documents, and I also applied a motivational title to the final output. This project demonstrated my ability to work with state-of-the-art NLP models for text summarization tasks, leveraging large-scale models and text preprocessing techniques to produce quality results.`,
    imageUrl: "./assets/8.webp",
  },
  {
    id: 9,
    title: "Pneumonia Detection",
    note: "TensorFlow Keras + Python + CNN",
    description: `
      In this project, I focused on developing a pneumonia detection model using deep learning techniques. The dataset was preprocessed by first extracting it from a ZIP file containing CT images labeled as “pneumonia” and “normal”. I used TensorFlow to load the images and preprocess them by resizing them into a uniform shape and normalizing the pixel values to the range [0, 1]. A convolutional neural network (CNN) was designed using TensorFlow’s Keras API. The model architecture included Conv2D layers for feature extraction, MaxPooling2D for dimensionality reduction, Dropout for regularization, and Dense layers for classification. I compiled the model with the Adam optimizer and SparseCategoricalCrossentropy loss function, and trained it on the dataset for 5 epochs, initially achieving an accuracy of 90% on the training set. To further evaluate the model, I tested it on a separate test dataset and achieved a good performance, indicating the model’s ability to generalize. After refining the model, I experimented with different epochs and layer configurations to improve both training and testing accuracies. This project demonstrated my ability to build and optimize a CNN for image classification tasks, specifically focusing on detecting pneumonia in chest CT scans.`,
    imageUrl: "./assets/9.webp",
  },
  {
    id: 10,
    title: "Satellite Image Classification",
    note: "Python + PyTorch + CNN",
    description: `
      In this project, I built a deep learning model for satellite image classification using PyTorch. After uploading and extracting the dataset, I applied various image transformations including resizing the images to a consistent shape and normalizing the pixel values based on the ImageNet dataset’s mean and standard deviation. The dataset was split into training and testing sets, using an 80/20 ratio, and loaded into DataLoader objects to handle batching efficiently. I designed a simple convolutional neural network (CNN) with multiple convolutional layers followed by fully connected layers for classification. The model was trained for 10 epochs using the Adam optimizer and CrossEntropyLoss as the loss function. During training, I monitored the loss at each step, and after training, the model was evaluated on the training dataset, where it achieved an accuracy of over 80%. This project demonstrated my ability to work with satellite image classification tasks, utilizing PyTorch for model development, data preprocessing, and evaluation.`,
    imageUrl: "./assets/10.webp",
  },
  {
    id: 11,
    title: "Calculator",
    note: "Java + Java Swing (GUI)",
    description: `
      This advanced calculator was developed as a first-year project, aiming to provide a fully functional application with ten distinct operations, including hexadecimal-to-decimal conversion. The project was designed as a GUI application using Java Swing to offer a user-friendly interface for basic arithmetic and specialized functions. Java was used to implement each operation, while Java Swing handled the interface, allowing for intuitive user interaction through buttons and keyboard entries. Challenges included managing user input effectively, which I addressed by implementing error handling and testing Swing’s event-handling capabilities. As the team lead, I designed and developed the interface and ensured integration of all functions into a cohesive application. The project received an A+ and third place among competitors, with praise for its intuitive GUI and advanced features.
    `,
    imageUrl: "./assets/11.webp",
  },

  {
    id: 12,
    title: "Youtube Channel",
    note: "Davinci Resolve + Adobe Premier",
    description: (
      <>
        This project is a reflection of my passion for video creation, where I
        shoot and edit content as a fun and creative hobby. Using tools like
        DaVinci Resolve and Adobe Premiere Pro, I’ve spent time developing my
        editing skills and experimenting with different filming techniques.
        While it’s not a professional venture, the channel has allowed me to
        explore storytelling through video, improve my technical abilities, and
        enhance my creativity with each new video. Whether it’s simple edits or
        more complex content, every project helps me continue to grow in my
        understanding of video production. From color correction to audio
        enhancements and visual effects, I enjoy the process of creating content
        that reflects my personal journey in video editing. This channel is a
        personal outlet for me, where I can share my progress and enjoy the
        process of creating without the pressure of professional expectations.
        It’s a space where I continue to learn, have fun, and challenge myself
        to improve.
        <a
          href="https://www.youtube.com/@GrrusInsight"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#00ccff",
            textDecoration: "none",
            fontWeight: "bold",
            marginLeft: "5px",
          }}
        >
          Check it out here!
        </a>
      </>
    ),
    imageUrl: "./assets/12.webp",
  },
  // Added "Coming Soon" cards with blurred images
  {
    id: 13,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "./assets/14.png",
  },
  {
    id: 14,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "./assets/15.png",
  },
  {
    id: 15,
    title: "Coming Soon...",
    note: "Coming Soon...",
    description: "Stay tuned for this upcoming project!",
    imageUrl: "./assets/16.png",
  },
];

const WorkGrid: React.FC = () => {
  const ref = useRef<HTMLUListElement | null>(null);
  const { scrollXProgress } = useScroll({ container: ref });
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

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

  const handleClick = (index: number) => {
    // Prevent expansion for "Coming Soon" cards
    if (cardData[index].id >= 13) return;
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div id="work-container">
      <div id="circle-container">
        <button
          className="github-button"
          onClick={handleGithubClick}
          aria-label="View GitHub Repositories"
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
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
              style={card.id >= 13 ? { cursor: "default" } : {}}
            >
              <div className="card-image">
                <img src={card.imageUrl} alt={`Card ${index + 1}`} />
              </div>
              <div className="card-overlay">
                {card.id >= 13 ? (
                  <h3>Coming Soon...</h3>
                ) : clickedIndex === index ? (
                  <p>{card.description}</p>
                ) : (
                  <>
                    <h3>{card.title}</h3>
                    <p className="note">{card.note}</p>
                  </>
                )}
              </div>
              <div className="arrow" />
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkGrid;

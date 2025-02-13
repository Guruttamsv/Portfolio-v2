import React, { useState } from "react";
import { motion } from "framer-motion";
import "../CSS/WorkPage/TopTabs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core"; // Import IconProp correctly

interface Tab {
  id: number;
  title: string;
  note: string;
  imgSrc: string;
  description: string;
}

const TopTabs: React.FC = () => {
  const [expandedTabIndex, setExpandedTabIndex] = useState<number | null>(null);

  const toggleTabExpansion = (tabIndex: number) => {
    setExpandedTabIndex(expandedTabIndex === tabIndex ? null : tabIndex);
  };

  const formatDescription = (text: string) => {
    return text
      .split("\n") // Split based on line breaks in the description
      .map((line, index) => (
        <span key={index}>{line}</span> // Wrap each line in a <span> tag
      ));
  };

  const tabs: Tab[] = [
    {
      id: 1,
      title: "Tip of Tongue Known Item Retrieval",
      note: "Python + LLM + Langchain + Autoencoder",
      imgSrc: "src/assets/TOT.webp",
      description: `
        -Overview-
        The Tip of Tongue (TOT) phenomenon, where you know something but can't quite recall it, is a common frustration. This project aimed to develop a chatbot that helps users retrieve movie titles they struggle to remember. The chatbot combines Large Language Models (LLMs) and unsupervised learning techniques to narrow down movie options based on user descriptions and iterative questioning.
        -Features-
        The chatbot offers a conversational interface where users describe the movie in their own words. Leveraging LLMs, the system generates a list of potential movie titles matching the description. An autoencoder identifies unique plot elements, which guide targeted yes-or-no questions. As users respond, the chatbot refines its understanding, honing in on the correct movie title.
        -Technical Details-
        Built in Python, the project integrates Langchain to manage LLMs like Llama2 for natural language processing. The Wikipedia API retrieves movie plots, while the autoencoder performs anomaly detection. Word embeddings and cosine similarity are used to compare user descriptions with movie plots. A simple GUI, created with Tkinter, allows users to interact easily with the system.
        -Challenges-
        Key challenges included selecting and fine-tuning the right LLM for effective movie retrieval and ensuring the autoencoder accurately identified significant plot anomalies. Designing an efficient filtering process to narrow down movie options based on user feedback required extensive testing and refinement.
        Role and Contribution: As the sole developer, you handled all aspects of the project, from conceptualization to development, testing, and documentation. You defined the project’s scope, implemented the system, and conducted tests to evaluate its effectiveness, ensuring comprehensive documentation throughout.
        -Results & Impact-
        The project successfully demonstrated the effectiveness of combining LLMs with unsupervised learning for movie retrieval. The system showed promising accuracy, particularly when all components worked together seamlessly. The iterative questioning strategy effectively refined search results, helping users identify the correct movie title. `,
    },
    {
      id: 2,
      title: "Automated Testing",
      note: "Selenium + Webdriver + C#",
      imgSrc: "src/assets/INT.webp",
      description: `
        -Overview-
        During my placement year at Transputec, within the CrisesControl division, I gained practical experience in software development and quality assurance. My primary focus was on enhancing the CrisesControl platform, a tool designed for business continuity and crisis management, through both manual and automated testing.
        Key Responsibilities and Contributions
        Manual Testing and Quality Assurance: Conducted detailed manual testing of the CrisesControl web application, identifying and reporting bugs. Participated in simulated crisis scenarios to evaluate the platform’s performance in real-world conditions.
        Selenium Test Automation: Developed automated test cases using Selenium and C#, which significantly increased testing efficiency and reduced the potential for human error. Played a key role in creating a test plan that integrated both manual and automated testing strategies.
        -Skills and Learning Outcomes-
        Gained proficiency in Selenium automation, C# programming, and creating Visio diagrams. Developed a deeper understanding of software testing methodologies and quality assurance practices.
        -Impact and Future Goals-
        The experience at Transputec significantly improved my skills in software testing and development. I aim to apply the knowledge gained in new opportunities, contributing to the software industry.
      `,
    },
  ];

  return (
    <div id="top-tabs-container">
      {tabs.map((tab) => (
        <motion.div
          key={tab.id}
          className={`top-tab ${expandedTabIndex === tab.id ? "expanded" : ""}`}
          onClick={() => toggleTabExpansion(tab.id)}
        >
          <div className="card-image">
            <img src={tab.imgSrc} alt={tab.title} />
          </div>
          <div className="card-overlay">
            {expandedTabIndex === tab.id ? (
              <>{formatDescription(tab.description)} </>
            ) : (
              <>
                <h3>{tab.title}</h3>
                <div className="card-note">{tab.note}</div>
              </>
            )}
          </div>

          {/* Icon positioned at the bottom-right corner */}
          <FontAwesomeIcon
            icon={faChevronDown as IconProp} // Explicitly cast as IconProp
            className={`icon ${expandedTabIndex === tab.id ? "expanded" : ""}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TopTabs;

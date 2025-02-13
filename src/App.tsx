import React from "react";
import NavBar from "./components/Layout/NavBar";
import HomePage from "./pages/HomePage";
import WorkPage from "./pages/WorkPage";
import IconsPage from "./pages/IconsPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <NavBar />
      <main>
        <section id="about" className="fullpage-section about-background">
          <HomePage />
        </section>
        <section id="work" className="fullpage-section work-background">
          <WorkPage />
        </section>
        <section id="whatsnext" className="fullpage-section whyme-background">
          <IconsPage />
        </section>
        <section id="contact" className="fullpage-section contact-background">
          <ContactPage />
        </section>
      </main>
    </div>
  );
};

export default App;

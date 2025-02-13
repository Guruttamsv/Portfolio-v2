import React, { useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";
import "../pagesCSS/ContactPage.css";

const ContactPage: React.FC = () => {
  const subHeadingRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null); // Ref for form
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

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

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevent default form submission
  setSending(true); // Set sending state to true

  if (formRef.current) {
    emailjs
      .sendForm(
        "service_uo0frog",
        "template_y7sfsgq",
        formRef.current,
        "PK72XSrQCTWNfEsL6"
      )
      .then(
        () => {
          setSending(false); // Set sending state to false
          setMessage("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          setSending(false); // Set sending state to false
          setMessage("Failed to send message, please try again.");
        }
      );
  }
};


  return (
    <div className="contact-page">
      <div className="subheading-container">
        <div className="sub-heading" ref={subHeadingRef}>
          {"Get in Touch".split("").map((char, index) => (
            <span key={index} className="letter">
              {char}
            </span>
          ))}
        </div>
      </div>
      <div className="content-container">
        <p>
          Curious about my work or just eager for a good chat? Feel free to drop
          me a line! I’d love to connect, share ideas, and explore exciting
          conversations together.
        </p>

        <div className="contact-details">
          <div className="contact-info">
            <h3>Contact Info</h3>
            <p>
              <strong>Email:</strong> reach.guruttamsv@gmail.com
            </p>
            <p>
              <strong>LinkedIn: </strong>
              <a
                href="https://www.linkedin.com/in/guruttamsv/"
                target="_blank"
                rel="noopener noreferrer"
              >
                GuruttamSv
              </a>
            </p>
            <p>
              <strong>Address:</strong> Uxbridge, London
            </p>
          </div>

          <div className="contact-form">
            <h3>Send a Message</h3>
            <form ref={formRef} onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
              ></textarea>

              <button type="submit" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
              </button>

              {message && <p className="message">{message}</p>}
            </form>
          </div>
        </div>

        {/* Add the Download CV Button */}
        <div className="download-cv">
          <a href="GruSivCV.pdf" download className="download-button">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

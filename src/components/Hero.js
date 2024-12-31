import React, { useState, useEffect, useCallback, useMemo } from "react";
import SocialLinks from "./SocialLinks";
import "../styles/Hero.css";

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const texts = useMemo(
    () => ["Frontend Developer", "Transforming Ideas into Digital Reality"],
    []
  );

  const handleTyping = useCallback(() => {
    const current = texts[textIndex];

    if (!isDeleting) {
      if (charIndex === current.length) {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 4000);
        return;
      }
      setCurrentText(current.slice(0, charIndex + 1));
      setCharIndex((prev) => prev + 1);
    } else {
      if (charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }
      setCurrentText(current.slice(0, charIndex - 1));
      setCharIndex((prev) => prev - 1);
    }
  }, [charIndex, isDeleting, textIndex, texts]);

  useEffect(() => {
    if (isPaused) return;

    const typingSpeed = isDeleting ? 70 : 130;
    const typingInterval = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [handleTyping, isDeleting, isPaused]);

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="profile-img">
          <img src="./images/portfolio.png" alt="Profile" />
        </div>
        <h1 className="glitch" data-text="Mohamed Atwa">
          Mohamed Atwa
        </h1>
        <p className="typing-text">
          {currentText}
          <span className="cursor" style={{ color: "transparent" }}>
            |
          </span>
        </p>
        <div className="social-links">
          <SocialLinks />
        </div>
        {/* Down Arrow */}
        <svg
          className="down-arrow"
          onClick={scrollToNextSection}
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          width="21"
          viewBox="0 0 448 512"
        >
          <path d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

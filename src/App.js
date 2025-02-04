import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "animate.css";
const projects = [
  {
    title: "Leon",
    description: "My first project with HTML and CSS",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./images/leon.png",
    demo: "https://mo-atwa.github.io/leon/",
    github: "https://github.com/mo-atwa/leon",
  },
  {
    title: "Kasper",
    description: "My second application on PSD from the graphberry website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./images/kasper.png",
    demo: "https://mo-atwa.github.io/kasper/",
    github: "https://github.com/mo-atwa/kasper",
  },
  {
    title: "Elzero",
    description: "My  application on PSD from Elzero website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./images/Elzero.png",
    demo: "https://mo-atwa.github.io/Elzero/",
    github: "https://github.com/mo-atwa/Elzero",
  },
];

AOS.init({
  disable: function () {
    return window.innerWidth < 768; // تعطيل AOS على الشاشات الأصغر من 768px
  }
});

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Re-run animation on every appearance
      mirror: true, // Run animation on scroll up as well
      disable: window.innerWidth < 768, // Disable on mobile devices
    });

    // Handle initial loading
    const timer = setTimeout(() => setIsLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Debounced scroll handler for better performance
    const handleScroll = debounce(() => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      handleScroll.cancel();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
      <main>
        <Hero />
        <About />
        <Projects projects={projects} />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

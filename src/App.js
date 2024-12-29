import React, { useState, useEffect } from "react";
import "./App.css";
import "animate.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  const projects = [
    {
      title: "Leon",
      description: "My first project with HTML and CSS",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/leon.png",
      demo: "https://mo-atwa.github.io/leon/",
      github: "https://github.com/mo-atwa/leon",
    },
    {
      title: "Kasper",
      description: "My second application on PSD from the graphberry website",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/kasper.png",
      demo: "https://mo-atwa.github.io/kasper/",
      github: "https://github.com/mo-atwa/kasper",
    },
    {
      title: "Elzero",
      description: "My  application on PSD from Elzero website",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/Elzero.png",
      demo: "https://mo-atwa.github.io/Elzero/",
      github: "https://github.com/mo-atwa/Elzero",
    },
    // {
    //   title: "Portfolio",
    //   description:
    //     "A full-featured e-commerce store with a shopping cart and checkout process",
    //   tech: ["React", "Redux", "Node.js", "MongoDB"],
    //   image: "/images/portfolio1.png",
    //   demo: "#",
    //   github: "#",
    // },
    // {
    //   title: "Educational Platform",
    //   description: "A platform for managing educational content and courses",
    //   tech: ["React", "Firebase", "Material-UI"],
    //   image: "/images/*.png",https://github.com/mo-atwa/kasper
    //   demo: "#",
    //   github: "#",
    // },
    // {
    //   title: "Admin Dashboard",
    //   description: "An admin dashboard for managing users and content",
    //   tech: ["React", "TypeScript", "Tailwind"],
    //   image: "/images/*.png",
    //   demo: "#",
    //   github: "#",
    // },
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 200 &&
          window.scrollY < sectionTop + sectionHeight - 200
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="app">
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        activeSection={activeSection}
      />
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

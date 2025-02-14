import React, { useState, useEffect } from "react";
import { debounce } from "lodash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import MoreProjects from "./components/MoreProjects";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "animate.css";

const projects = [
  {
    title: "Hangman Game",
    description: "A classic Hangman game built with HTML, CSS, and JavaScript. Test your vocabulary and guessing skills by figuring out the hidden word before the stick figure is fully drawn!",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./images/hangman.png",
    demo: "https://hangman-atwa.netlify.app/",
    github: "https://github.com/mo-atwa/Hangman",
  },
  {
    title: "To-Do List",
    description: "A simple and efficient To-Do List web application built with React.js to help users manage their tasks effectively.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    image: "./images/todo_list.png",
    demo: "https://task-mohem.netlify.app/",
    github: "https://github.com/mo-atwa/Task-Mohem",
  },
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
    description: "My application on PSD from Elzero website",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "./images/Elzero.png",
    demo: "https://mo-atwa.github.io/Elzero/",
    github: "https://github.com/mo-atwa/Elzero",
  },
  {
    title: "Loan Request Form",
    description: "A sleek and user-friendly loan request form built with React.js. This form allows users to input their details.",
    tech: ["HTML", "CSS", "JavaScript", "React.js"],
    image: "./images/lone_form.png",
    demo: "https://lone-form.netlify.app/",
    github: "https://github.com/mo-atwa/Lone-Form",
  },
];
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS inside the component
    AOS.init({
      duration: 1000,
      once: false, // Re-run the animation when the element appears again
      mirror: true, // Run the animation when scrolling up as well
      disable: false, // Disable AOS on screens smaller than 768px, adjust if you want it to run on mobile
    });

    // Handle the initial loading screen
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Function to handle scrolling with debounce for performance improvement
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white dark:bg-gray-900">
              <Navbar
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                activeSection={activeSection}
              />
              <main>
                <Hero />
                <About />
                <Projects AllProjects={projects} />

                <Skills />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
        <Route path="/more-projects" element={<MoreProjects AllProjects={projects}/>} />
      </Routes>
    </Router>
  );
};

export default App;

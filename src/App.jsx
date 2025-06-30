import { useEffect, useState } from 'react';
import Loader from './Components/Loader';
import Header from './Components/Header';
import Hero from './Components/Hero';
import About from './Components/About';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Certifications from './Components/Certifications';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './Components/Styles/Loader.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This will run only after loader completes
    if (!isLoading) {
      // Initialize smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });

      // Initialize intersection observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.timeline-item, .project-card, .skill, .certification-card').forEach(element => {
        observer.observe(element);
      });

      return () => observer.disconnect();
    }
  }, [isLoading]);

  return (
    <div className="App">
      {isLoading ? (
        <Loader onLoaded={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Certifications />
          <Projects />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
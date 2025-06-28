import { FaDownload } from "react-icons/fa";
import img from '../assets/about.png';
import resumePDF from '../assets/AbhijithResume.pdf';

const Hero = () => {
  const handleDownload = () => {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = resumePDF; // Use the imported PDF directly
    link.download = 'AbhijithResume.pdf'; // This will force download with this filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm <span>Abhijith A</span></h1>
            <h2>Cybersecurity Analyst & Ethical Hacker</h2>
            <p>Entry-Level Cyber Security Enthusiast with foundational skills in Network Security, SOC Monitoring, and VAPT. Certified in CEH v12 and Certified Penetration Testing (CPT) with hands-on experience in Wireshark, SIEM tools, and vulnerability scanning.</p>
            <div className="hero-buttons">
              <button onClick={handleDownload} className="btn">
                <FaDownload className="icon" /> Download Resume
              </button>
              <a href="#contact" className="btn">Get In Touch</a>
              <a href="#projects" className="btn btn-outline">View My Work</a>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src={img} 
              alt="Abhijith A - Cybersecurity Professional" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="about-content">
          <div className="about-text">
            <h3>Cybersecurity Professional</h3>
            <p>I'm an entry-level cybersecurity professional passionate about protecting digital assets and infrastructure from emerging threats. With certifications in CEH v12 and CPT, I bring a strong foundation in ethical hacking and penetration testing.</p>
            <p>My experience spans network defense strategies, threat intelligence analysis, and vulnerability management. I'm dedicated to continuous learning and staying ahead in the ever-evolving cybersecurity landscape.</p>
            
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-btn red"></div>
                <div className="terminal-btn yellow"></div>
                <div className="terminal-btn green"></div>
                <div className="terminal-title">abhijith@cybersecurity:~</div>
              </div>
              <div className="terminal-body">
                <p><span className="command">$ whoami</span></p>
                <p><span className="output">Cybersecurity Analyst | Ethical Hacker | Security Enthusiast</span></p>
                <p><span className="command">$ skills</span></p>
                <p><span className="output">Network Security | SOC Monitoring | VAPT | Penetration Testing</span></p>
                <p><span className="command">$ certifications</span></p>
                <p><span className="output">CEH v12 | CPT | Ethical Hacking Essentials | Cybersecurity Essentials</span></p>
                <p><span className="command">$ _<span className="blink">|</span></span></p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="About Me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Network Security</h3>
            <div className="skills">
              <span className="skill">Wireshark</span>
              <span className="skill">Nmap</span>
              <span className="skill">TCP/IP</span>
              <span className="skill">Firewall</span>
              <span className="skill">Nessus</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>SOC Monitoring</h3>
            <div className="skills">
              <span className="skill">SIEM</span>
              <span className="skill">Log Analysis</span>
              <span className="skill">IDS/IPS</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>VAPT</h3>
            <div className="skills">
              <span className="skill">Burp Suite</span>
              <span className="skill">Metasploit</span>
              <span className="skill">OWASP Top 10</span>
              <span className="skill">SQLmap</span>
            </div>
          </div>
          <div className="skills-category">
            <h3>Other Skills</h3>
            <div className="skills">
              <span className="skill">Python</span>
              <span className="skill">React JS</span>
              <span className="skill">HTML/CSS</span>
              <span className="skill">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
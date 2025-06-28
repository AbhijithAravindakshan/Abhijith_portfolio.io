const Certifications = () => {
  const certifications = [
    {
      title: "Certified Ethical Hacker (CEH) v12",
      issuer: "EC-Council",
      date: "2024",
      description: "Validates skills in ethical hacking, including footprinting and reconnaissance, scanning networks, enumeration, system hacking, malware threats, sniffing, social engineering, denial-of-service, session hijacking, evading IDS, firewalls, and honeypots.",
      image: "https://www.haec.gr/images/LifeLong/2022/Certified_Ethical_Hacker.jpg",
      link: "https://drive.google.com/file/d/1sl-vtLAT1DwTxAa_Ya28Mch7-3-72o4T/view?usp=drive_link"
    },
    {
      title: "Certified Penetration Testing (CPT)",
      issuer: "EC-Council",
      date: "2024",
      description: "Demonstrates expertise in penetration testing methodologies, tools, and techniques for identifying and exploiting vulnerabilities in systems and networks.",
      image: "https://www.measureup.com/media/wysiwyg/penetration_tester_certifications.jpg",
      link: "https://drive.google.com/file/d/1hqps0Y4HYsRr7TgCC06dTvURnsNoqT3F/view?usp=drive_link"
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google",
      date: "2025",
      description: "Comprehensive training in cybersecurity fundamentals including network security, SIEM tools, Python for security, and incident response using Google's security tools and best practices.",
      image: "https://www.stationx.net/wp-content/uploads/2023/11/1.-What-is-the-Google-Cybersecurity-Professional-Certificate.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/F0QS5PZXFG88"
    },
    {
      title: "SQL Injection Attacks",
      issuer: "EC-Council",
      date: "2024",
      description: "Covers foundational sql injection principles including security concepts, threats, vulnerabilities, and network defense strategies.",
      image: "https://www.eccouncil.org/cybersecurity-exchange/wp-content/uploads/2024/03/sql.png.webp",
      link: "https://learn.eccouncil.org/certificate/a5ff5642-904b-4c66-a9d4-9e26bd6f2ba5?logged=true"
    }
  ];

  const handleCertificationClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-title">
          <h2>My Certifications</h2>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div 
              className="certification-card" 
              key={index}
              onClick={() => handleCertificationClick(cert.link)}
              style={{ cursor: 'pointer' }}
            >
              <div className="certification-image">
                <img src={cert.image} alt={cert.title} />
              </div>
              <div className="certification-info">
                <h3>{cert.title}</h3>
                <h4>{cert.issuer} • {cert.date}</h4>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
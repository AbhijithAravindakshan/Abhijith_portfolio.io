const Projects = () => {
  const projects = [
    {
      title: "Home SOC Lab",
      description: "Set up a SIEM (e.g., wazuh Free) to monitor VM logs and created custom alerts for brute-force attacks.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["SIEM", "Security Monitoring", "Log Analysis"]
    },
    {
      title: "Network Vulnerability Scan",
      description: "Used Nessus to scan a test network and generated a comprehensive risk report with mitigation strategies.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80",
      tags: ["Nessus", "Vulnerability Assessment", "Risk Analysis"]
    },
    {
      title: "OWASP Web App Pentest",
      description: "Conducted security assessments on vulnerable web apps (DVWA, OWASP) and identified & exploited vulnerabilities (SQLi, XSS).",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      tags: ["Penetration Testing", "OWASP", "Web Security"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span className="project-tag" key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
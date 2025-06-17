import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch</h2>
        </div>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-details">
              <div className="contact-item">
                <i><FaEnvelope /></i>
                <span>abhijitha.ksal5@gmail.com</span>
              </div>
              <div className="contact-item">
                <i><FaMapMarkerAlt /></i>
                <span>7400 Sulaiman Bin Mahran St - Al Amal District, Riyadh RC8B7400, Saudi Arabia</span>
              </div>
            </div>
            <h3>Follow Me</h3>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/abhijith-a-5460a924a/" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
              <a href="https://github.com/dashboard" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/mr_abhi_jith_/?__pwa=1#" className="social-link">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
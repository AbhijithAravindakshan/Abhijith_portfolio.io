import { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { SiTryhackme } from "react-icons/si";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    emailjs.sendForm(
      'service_3qglxy4', // Replace with your EmailJS service ID
      'template_12b9o26', // Replace with your EmailJS template ID
      form.current,
      'u7uw4DKBO2xwW0O8n' // Replace with your EmailJS public key
    )
    .then((result) => {
      console.log(result.text);
      setIsSent(true);
      form.current.reset();
      // Reset sent status after 5 seconds
      setTimeout(() => setIsSent(false), 5000);
    }, (error) => {
      console.log(error.text);
      setError('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSending(false);
    });
  };

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
                <span>abhijitha.ksa15@gmail.com</span>
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
              <a href="https://github.com/dashboard" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.instagram.com/mr_abhi_jith_/?__pwa=1#" className="social-link" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://tryhackme.com/p/Mr.AA" className="social-link" target="_blank" rel="noopener noreferrer">
                <SiTryhackme />
              </a>

            </div>
          </div>
          <div className="contact-form">
            {isSent && (
              <div className="alert alert-success">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="alert alert-error">
                {error}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name" 
                  className="form-control" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email" 
                  className="form-control" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-control" 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control" 
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn" 
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
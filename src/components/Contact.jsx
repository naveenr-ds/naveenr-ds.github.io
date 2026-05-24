import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact-inner">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            I'm always open to discussing data science projects, research
            collaborations, or new opportunities. Feel free to reach out!
          </p>

          <div className="contact-email">
            <a
              href="mailto:naveenramu2003@gmail.com"
              className="btn btn-primary"
              id="contact-email-btn"
            >
              <FaEnvelope />
              Say Hello
            </a>
          </div>

          <div className="contact-socials">
            <a
              href="https://github.com/naveenr-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
              id="social-github"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/naveenkumar-ds"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
              id="social-linkedin"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

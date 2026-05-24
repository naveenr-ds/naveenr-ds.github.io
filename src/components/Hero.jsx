import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero section" id="hero">
      <div className="hero-grid" />
      <div className="hero-blob" />

      <div className="container hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Open to opportunities
        </div>

        <h1>
          Hi, I'm <span className="accent">Naveen R</span>
        </h1>

        <h2>Data Scientist &amp; ML Engineer</h2>

        <p>
          I transform raw data into actionable insights and build intelligent
          systems that solve real-world problems. Passionate about machine
          learning, deep learning, and creating data-driven solutions that
          make a difference.
        </p>

        <div className="hero-buttons">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-primary"
          >
            View My Work
            <FaArrowRight size={14} />
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="btn btn-outline"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;

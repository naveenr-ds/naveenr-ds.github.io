import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../data/projects';
import '../styles/projects.css';

function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects I've built — from ML pipelines to
          production APIs.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card glass" key={project.id}>
              <div className="project-card-number">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

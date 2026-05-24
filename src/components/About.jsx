import '../styles/about.css';

const skillCategories = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL','HTML','CSS','JavaScript'],
  },
  {
    label: 'ML / DL',
    skills: [
      'Scikit-learn',
      'TensorFlow',
      'PyTorch',
      'XGBoost',
      'Keras',
      'Hugging Face',
    ],
  },
  {
    label: 'Data & Viz',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Streamlit', 'Power BI'],
  },
  {
    label: 'Tools & Infra',
    skills: ['Git', 'Docker', 'AWS', 'FastAPI', 'PostgreSQL','RabbitMQ','Redis','Ollama','Githup Copilot'],
  },
];

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          A little background about who I am and what I do.
        </p>

        <div className="about-grid">
          <div className="about-text">
            <h3>Building the future with AI and Data</h3>
            <p>
              I'm a Data Science student currently working as an AI Engineer Intern at EthicaTec India Pvt Ltd. My journey is driven by a passion for building intelligent systems and solving real-world problems.
            </p>
            <p>
              With a strong foundation in AI and Large Language Model (LLM) concepts, alongside Full Stack development skills, I thrive at the intersection of model engineering and application development. I focus on creating solutions that are not just accurate but also scalable and user-centric.
            </p>
            <p>
              Whether it's fine-tuning LLMs, building end-to-end ML pipelines, or developing interactive full-stack applications, I am always eager to learn, build, and deliver impactful technology.
            </p>
          </div>

          <div className="skills-panel">
            {skillCategories.map(({ label, skills }) => (
              <div className="skills-category" key={label}>
                <div className="skills-label">{label}</div>
                <div className="skills-list">
                  {skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

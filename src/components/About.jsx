import '../styles/about.css';

const skillCategories = [
  {
    label: 'Languages',
    skills: ['Python', 'SQL', 'R', 'JavaScript'],
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
    skills: ['Git', 'Docker', 'AWS', 'Airflow', 'FastAPI', 'PostgreSQL'],
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
            <h3>Building the future with data</h3>
            <p>
              I'm a Data Scientist and Machine Learning Engineer with a passion
              for uncovering patterns in complex datasets and building
              production-grade ML systems. My work spans the full data science
              lifecycle — from exploratory analysis and feature engineering to
              model development, deployment, and monitoring.
            </p>
            <p>
              I thrive at the intersection of statistics, engineering, and
              domain expertise, building solutions that are not just accurate
              but also scalable and maintainable. Whether it's a
              recommendation engine, an NLP pipeline, or a forecasting model,
              I focus on delivering real business impact.
            </p>
            <p>
              When I'm not training models, you'll find me exploring the latest
              research papers, contributing to open source, or writing about
              data science best practices.
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

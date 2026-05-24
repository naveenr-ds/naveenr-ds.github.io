const projects = [
  {
    id: 1,
    title: 'Curriculam Q&A Assitant',
    description:
      'End-to-end ML pipeline predicting telecom customer churn with 94% accuracy. Features automated data preprocessing, feature engineering, and model selection using XGBoost and LightGBM.',
    tags: ['Python', 'XGBoost', 'Scikit-learn', 'Pandas'],
    github: 'https://github.com/naveenr-ds/curriculum-qa-assistant.git',
    demo: null,
  },
  {
    id: 2,
    title: 'Hospital Management System',
    description:
      'NLP-powered sentiment classifier for product reviews using transformer-based models. Achieved 91% F1-score on benchmark datasets with real-time inference API.',
    tags: ['NLP', 'Transformers', 'PyTorch', 'FastAPI'],
    github: 'https://github.com/naveenr-ds/Hospital_Management_System.git',
    demo: null,
  },
  {
    id: 3,
    title: 'PhonePe Pulse',
    description:
      'Interactive time-series forecasting dashboard with Prophet and ARIMA models. Visualizes trends, seasonality decomposition, and prediction intervals for business stakeholders.',
    tags: ['Time Series', 'Prophet', 'Streamlit', 'Plotly'],
    github: 'https://github.com/naveenr-ds/Phonepe_pulse.git',
    demo: null,
  },
  {
    id: 4,
    title: 'Luxury Housing Analysis',
    description:
      'Deep learning REST API for multi-class image classification. Built with transfer learning on ResNet50, deployed as a containerized microservice with automated CI/CD.',
    tags: ['Deep Learning', 'TensorFlow', 'Docker', 'REST API'],
    github: 'https://github.com/naveenr-ds',
    demo: null,
  },

];

export default projects;

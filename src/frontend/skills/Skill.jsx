import React from 'react';

function SkillsSection() {
    const skills = [
        {
            id: '01',
            title: 'Machine Learning',
            description:
            'Designing, training, and evaluating machine learning models to solve real-world problems with a strong focus on performance, robustness, and deployment readiness.'
        },
        {
            id: '02',
            title: 'Deep Learning',
            description:
            'Building neural network architectures including CNNs, RNNs, and Transformers for computer vision, sequence modeling, and representation learning.'
        },
        {
            id: '03',
            title: 'Data Science & Analytics',
            description:
            'Analyzing and modeling complex datasets to extract insights, build predictive systems, and support data-driven decision making.'
        },
        {
            id: '04',
            title: 'Generative AI & LLMs',
            description:
            'Developing LLM-based systems using prompt engineering, vector databases, and RAG pipelines to create intelligent, context-aware applications.'
        },
        {
            id: '05',
            title: 'Backend & APIs',
            description:
            'Engineering scalable backend services and APIs using Python and FastAPI to support AI workflows, analytics, and production systems.'
        },
        {
            id: '06',
            title: 'Data Engineering',
            description:
            'Designing efficient data pipelines, storage layers, and processing workflows to handle structured and unstructured data at scale.'
        },
        {
            id: '07',
            title: 'Research & Experimentation',
            description:
            'Exploring new ideas through research, experimentation, and model evaluation with experience in academic and applied research environments.'
        },
        {
            id: '08',
            title: 'AI Products & Systems',
            description:
            'Building end-to-end AI-powered products by combining models, data, systems, and UX into impactful, production-ready solutions.'
        }
];

  return (
    <div className="relative w-full bg-transparent py-20 md:py-32 px-8 md:px-16 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal mb-4">
            <span className="text-white">Building Intelligence</span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              End-to-End
            </span>
          </h2>
          <p className="text-white/70 text-lg mt-6">
            With my multidisciplinary skill set.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
            >
              {/* Skill Number */}
              <div className="flex justify-between items-start mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-purple-400 to-pink-400 rounded"></div>
                </div>
                <span className="text-white/40 text-sm font-light">{skill.id}</span>
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-medium mb-3 group-hover:text-purple-300 transition-colors duration-300">
                {skill.title}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm leading-relaxed">
                {skill.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Tools & Technologies Section */}
        <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
          <h3 className="text-white text-2xl md:text-3xl font-medium mb-8">
            Tools & Technologies
          </h3>
          
          {/* Tools Grid */}
          <div className="flex flex-wrap gap-3">
            {[
                // Core Languages
                'Python', 'R', 'JavaScript',

                // ML / DL
                'PyTorch', 'TensorFlow', 'Scikit-learn',
                'Keras', 'XGBoost',

                // GenAI & LLMs
                'Hugging Face', 'LangChain', 'LlamaIndex',
                'OpenAI API', 'Anthropic API',
                'FAISS', 'Weaviate',

                // Data Science
                'Pandas', 'NumPy', 'Matplotlib',
                'Seaborn', 'Plotly',

                // Computer Vision
                'OpenCV', 'YOLO', 'MediaPipe',

                // Backend & APIs
                'FastAPI', 'Node.js', 'REST APIs',

                // Databases
                'MongoDB', 'PostgreSQL', 'Redis',

                // MLOps & Deployment
                'Docker', 'AWS', 'MLflow',

                // Dev & Research
                'Git', 'GitHub', 'Jupyter Notebook', 'Google Colab'
                ].map((tool, index) => (
                <span
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/80 text-sm hover:bg-white/10 hover:border-purple-500/50 hover:text-white transition-all duration-300 cursor-default"
                >
                    {tool}
                </span>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
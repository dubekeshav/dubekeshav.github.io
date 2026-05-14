import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Python', 'Java', 'SQL', 'JavaScript'],
    },
    {
      category: 'AI & Machine Learning',
      skills: ['Machine Learning', 'Deep Learning', 'NLP', 'LLMs', 'Generative AI', 'Feature Engineering', 'Model Training', 'Scikit-learn', 'TensorFlow', 'PyTorch'],
    },
    {
      category: 'LLM Systems & Agents',
      skills: ['LangGraph', 'RAG Agents', 'Hierarchical Agents', 'LLM Orchestration', 'Embeddings', 'Prompt Engineering', 'Model Calibration', 'Hugging Face'],
    },
    {
      category: 'Data Science & Statistics',
      skills: ['Statistical Analysis', 'Predictive Modeling', 'Time Series', 'A/B Testing', 'Hypothesis Testing', 'Causal Inference'],
    },
    {
      category: 'Backend & Systems',
      skills: ['FastAPI', 'Spring Boot', 'REST APIs', 'Microservices', 'Distributed Systems', 'System Design', 'OOP', 'Design Patterns'],
    },
    {
      category: 'Cloud & Infrastructure',
      skills: ['AWS', 'Azure', 'Docker', 'Kafka', 'Redis', 'CI/CD', 'Jenkins', 'Databricks', 'MLflow'],
    },
    {
      category: 'Databases & Storage',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'CassandraDB', 'AWS S3', 'Azure Blob Storage'],
    },
    {
      category: 'Tools & Analytics',
      skills: ['Git', 'Jupyter', 'Tableau', 'SQL', 'Pandas', 'NumPy'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm hover:bg-blue-600/20 hover:text-blue-400 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      category: 'Data Science & ML',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Keras'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'AI & NLP',
      skills: ['LLMs', 'Transformers', 'BERT', 'GPT', 'Hugging Face', 'Prompt Engineering', 'RAG'],
      color: 'from-purple-500 to-blue-500',
    },
    {
      category: 'Data Engineering',
      skills: ['SQL', 'Kafka', 'Spark', 'AWS', 'ETL', 'Data Pipelines', 'BigQuery'],
      color: 'from-pink-500 to-purple-500',
    },
    {
      category: 'Web Development',
      skills: ['React', 'TypeScript', 'Node.js', 'JavaScript', 'Tailwind CSS', 'FastAPI', 'REST APIs'],
      color: 'from-green-500 to-blue-500',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'Tableau', 'Jupyter'],
      color: 'from-orange-500 to-pink-500',
    },
    {
      category: 'Statistics & Analytics',
      skills: ['Statistical Analysis', 'A/B Testing', 'Hypothesis Testing', 'Regression', 'Classification', 'Clustering'],
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-12" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="group"
          >
            <div className="glass rounded-lg p-6 h-full hover:bg-blue-500/10 transition-all">
              {/* Category Header */}
              <motion.div
                className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20 mb-4`}
              >
                <h3 className={`font-bold text-sm bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.category}
                </h3>
              </motion.div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 text-slate-200 text-sm font-medium cursor-pointer transition-all border border-slate-600/30 hover:border-slate-500/50"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>

              {/* Progress bar indicator */}
              <motion.div
                className={`mt-4 h-1 rounded-full bg-gradient-to-r ${category.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                origin="left"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Proficiency Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-16 glass rounded-lg p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-6">Proficiency Overview</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { label: 'Machine Learning & AI', value: 95 },
            { label: 'Data Engineering', value: 90 },
            { label: 'Web Development', value: 85 },
            { label: 'Data Analysis & Statistics', value: 92 },
          ].map((skill, index) => (
            <motion.div key={index}>
              <div className="flex justify-between mb-2">
                <span className="text-slate-200 font-semibold">{skill.label}</span>
                <span className="text-blue-400 font-bold">{skill.value}%</span>
              </div>
              <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
                  transition={{ duration: 1.2, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

import { motion } from 'framer-motion'

const Education = () => {
  const education = [
    {
      degree: 'Masters of Science in Data Science',
      institution: 'University of Connecticut',
      period: 'Aug 2024 - Dec 2025',
      cgpa: '3.875 / 4.0',
      details: 'Specialized in Causal Inference, NLP, Deep Learning, Generative AI, and Advanced Statistics. Coursework: Causal Inference, NLP, Deep Learning, Machine Learning, Generative AI, Statistics, Data Mining, Algorithms.',
    },
    {
      degree: 'Bachelors of Technology in Mechanical Engineering',
      institution: 'Vellore Institute of Technology (VIT)',
      period: 'Jul 2016 - Jun 2020',
      cgpa: '8.5 / 10.0',
      details: 'Strong foundation in engineering principles and problem-solving methodologies. Successfully transitioned to data science and artificial intelligence with focus on emerging technologies.',
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">Education</h2>

        <div className="space-y-12">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-slate-600 pl-6 hover:border-blue-500 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <span className="text-sm text-slate-400 font-mono">{edu.period}</span>
              </div>
              <div className="flex justify-between items-start mb-2">
                <p className="text-blue-400 font-semibold">{edu.institution}</p>
                <span className="text-sm text-slate-400 font-semibold">CGPA: {edu.cgpa}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Education

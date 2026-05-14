import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Data Scientist',
      company: 'Hartford Steam Boiler / Munich Re',
      period: 'Jun 2025 - Dec 2025',
      highlights: [
        'Built an intelligent knowledge system that understands domain-specific documents (insurance standards, historical cases), helping teams make better underwriting decisions with transparent, fact-based recommendations.',
        'Created a comprehensive evaluation framework for AI models, measuring accuracy and reliability with human feedback loops, ensuring production systems meet rigorous quality standards.',
        'Developed a smart recommendation system that improved the quality of suggestions from 25% to 78%, directly supporting faster and more accurate risk assessments.',
        'Optimized data pipelines for massive datasets using PySpark, achieving an 84% speedup and enabling rapid experimentation with large-scale data.',
      ],
    },
    {
      title: 'Data Scientist',
      company: 'University of Connecticut',
      period: 'Oct 2024 - May 2025',
      highlights: [
        'Built a predictive model pipeline that improved decision accuracy from 70% to 88%, helping admission teams identify strong applicants more efficiently while reducing review workload by 30%.',
        'Performed detailed analysis on 5,000+ applicant profiles to understand which factors matter most for admission success, improving overall accuracy by 25%.',
        'Created executive dashboards that transformed complex model outputs into actionable insights, boosting stakeholder adoption by 40%.',
      ],
    },
    {
      title: 'Senior AI Engineer',
      company: 'Data Engine',
      period: 'Jan 2023 - Jul 2024',
      highlights: [
        'Led ML initiatives that earned Rising Star and Client Hero awards, delivering significant improvements to customer experience across enterprise platforms.',
        'Built a personalization engine that learned user preferences and ranked content intelligently, improving engagement metrics by 28% and model performance from 0.71 to 0.84 AUC.',
        'Engineered real-time data pipelines handling 100,000+ events per hour, cutting latency in half and enabling instant personalized experiences at scale.',
        'Developed document classification systems using modern NLP techniques, improving search quality by 22% and reducing manual work by 35%.',
        'Built experimentation infrastructure (MLflow, testing frameworks) that made it easy to test new ideas and measure impact, improving decision-making by 18%.',
        'Led the backend team through a major cloud migration (AWS to Azure), improving reliability while reducing costs by 20%.',
        'Optimized system architecture with smart caching and parallel processing, achieving 5× faster transactions and cutting API latency by 45%.',
        'Delivered two critical production systems end-to-end with zero downtime, improving deployment reliability by 30%.',
      ],
    },
    {
      title: 'Backend Engineer (Data & ML Systems)',
      company: 'Freecharge Payments',
      period: 'Dec 2021 - Jan 2023',
      highlights: [
        'Built scalable backend services using Spring Boot that handled high-volume transactions reliably, doubling system throughput capacity.',
        'Implemented comprehensive testing (92% code coverage) that caught bugs early, reduced maintenance issues, and saved the team ~3 hours per week on bug fixes.',
        'Shipped data-driven features that improved transaction success rates by 18%, directly impacting user experience and business metrics.',
        'Built resilient APIs and data services that kept the platform stable while processing thousands of concurrent transactions.',
      ],
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Digii EduTech',
      period: 'Jan 2020 - Nov 2021',
      highlights: [
        'Built intelligent recommendation systems that helped 80,000+ students get personalized financial guidance, improving engagement by 25%.',
        'Developed fast ML APIs using Python and Java that responded in milliseconds, ensuring smooth user experiences even under heavy load.',
        'Designed data analytics pipelines that turned student behavior into personalized recommendations, driving better product adoption and retention.',
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">Experience</h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-l-2 border-slate-600 pl-6 hover:border-blue-500 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <span className="text-sm text-slate-400 font-mono">{exp.period}</span>
              </div>
              <p className="text-blue-400 font-semibold mb-4">{exp.company}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="text-slate-300 leading-relaxed flex gap-3">
                    <span className="text-blue-400 font-bold mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience

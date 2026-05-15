import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { slideInLeft, slideInRight } from '../utils/motionVariants'

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 20%'],
  })
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  const experiences = [
    {
  title: 'Data Scientist / Applied AI Engineer',
  company: 'Hartford Steam Boiler / Munich Re',
  period: 'Jun 2025 - Dec 2025',
  highlights: [
    'Built a RAG-powered underwriting intelligence platform that retrieved insights from insurance guidelines, historical claims, and policy documents to assist underwriters in complex risk decisions.',
    
    'Improved recommendation relevance from 25% to 78% by redesigning retrieval pipelines, ranking logic, and evaluation workflows for domain-specific decision systems.',
    
    'Designed human-in-the-loop evaluation pipelines for LLM outputs using feedback scoring, retrieval benchmarking, and hallucination detection workflows.',
    
    'Accelerated experimentation on large underwriting datasets by optimizing PySpark pipelines, reducing processing time by 84% for model training workflows.',
    
    'Built explainability layers that surfaced evidence-backed recommendations, increasing trust and adoption among underwriting teams.'
  ],
},

{
  title: 'Data Scientist',
  company: 'University of Connecticut',
  period: 'Oct 2024 - May 2025',
  highlights: [
    'Built an end-to-end student success prediction pipeline by integrating 5 fragmented datasets and training ML models to predict enrollment outcomes with 88% accuracy.',
    
    'Improved model performance by 25% through feature engineering across academic performance, demographic behavior, and geographic signals.',
    
    'Automated large-scale data preprocessing workflows for 5,000+ applicant profiles, reducing manual analysis effort significantly.',
    
    'Built Tableau dashboards for university leadership that translated model outputs into enrollment strategy recommendations.',
    
    'Identified high-impact enrollment drivers that helped admissions teams reduce manual review workload by 30%.'
  ],
},

{
  title: 'Senior AI Engineer',
  company: 'Data Engine',
  period: 'Jan 2023 - Jul 2024',
  highlights: [
    'Built a recommendation engine that improved user engagement by 28% by combining behavioral ranking models with personalized content delivery systems.',
    
    'Improved recommendation model AUC from 0.71 to 0.84 through feature engineering, experimentation pipelines, and model optimization.',
    
    'Engineered Kafka-based real-time pipelines processing 100K+ events/hour to power low-latency recommendation workflows.',
    
    'Built NLP-based document classification systems that improved enterprise search relevance by 22% and reduced manual processing by 35%.',
    
    'Developed ML experimentation infrastructure using MLflow and automated testing pipelines to accelerate model deployment cycles.',
    
    'Led migration of enterprise infrastructure from AWS to Azure with zero downtime for production systems.',
    
    'Reduced API latency by 45% and improved transaction throughput by 5x through caching optimization, asynchronous processing, and backend architecture improvements.'
  ],
},

{
  title: 'Backend Engineer (Data & ML Systems)',
  company: 'Freecharge Payments',
  period: 'Dec 2021 - Jan 2023',
  highlights: [
    'Built Spring Boot microservices that scaled payment transaction throughput by 2x across high-volume financial systems.',
    
    'Improved transaction success rates by 18% by building backend systems for payment routing and failure recovery workflows.',
    
    'Built distributed backend services capable of handling high concurrency transaction workloads with strong reliability guarantees.',
    
    'Implemented PyTest/JUnit testing frameworks with 92% code coverage, reducing production failures and improving release velocity.',
    
    'Worked on event-driven architectures using AWS SQS/SNS to improve resilience across payment workflows.'
  ],
},

{
  title: 'Machine Learning Engineer',
  company: 'Digii EduTech',
  period: 'Jan 2020 - Nov 2021',
  highlights: [
    'Built recommendation systems serving 80,000+ students by delivering personalized financial product recommendations.',
    
    'Developed real-time ML APIs in Python and Java with millisecond response latency for production recommendation workflows.',
    
    'Built behavioral analytics pipelines that transformed student interaction data into personalized engagement strategies.',
    
    'Collaborated across product and engineering teams to deploy machine learning systems into production environments.'
  ],
},
  ]

  return (
    <section ref={sectionRef} id="experience" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-white relative z-10"
      >
        Experience
      </motion.h2>

      <div className="relative z-10">
        {/* The animated vertical timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-800">
          <motion.div className="timeline-line absolute inset-0 w-full" style={{ scaleY: lineScaleY }} />
        </div>

        <div className="space-y-12 pl-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="relative"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 400, damping: 20 }}
                className="absolute -left-[3.25rem] top-2 w-4 h-4 rounded-full bg-blue-500 border-2 border-slate-950 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
              />

              {/* The card */}
              <motion.div whileHover={{ x: 6 }} transition={{ duration: 0.25 }} className="glass glass-hover rounded-xl p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{exp.title}</h3>
                  <span className="text-sm text-slate-400 font-mono flex-shrink-0">{exp.period}</span>
                </div>
                <p className="text-blue-400 font-semibold mb-4 text-sm">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <motion.li
                      key={hIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: hIndex * 0.05 }}
                      className="text-slate-300 text-sm leading-relaxed flex gap-3"
                    >
                      <span className="text-blue-400 mt-1.5 text-xs">▸</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

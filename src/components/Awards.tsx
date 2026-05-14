import { motion } from 'framer-motion'
import { Award } from 'lucide-react'


const Awards = () => {
  const awards = [
    {
      title: 'Rising Star Award',
      issuer: 'Data Engine',
      period: '2024',
      description:
        'Recognized for exceptional contributions in developing advanced machine learning pipelines and delivering data-driven solutions that generated measurable business impact. Demonstrated strong technical acumen in designing scalable systems for high-volume data processing and real-time ML inference.',
    },
    {
      title: 'Client Hero Award',
      issuer: 'Data Engine',
      period: '2023',
      description:
        'Awarded for delivering transformative data-driven solutions that directly contributed to client success and measurable business outcomes. Showcased expertise in translating complex analytical challenges into actionable insights using advanced statistical modeling and machine learning techniques.',
    },
    {
      title: 'Top 3 Finish',
      issuer: 'Freecharge Hackathon',
      period: '2022',
      description:
        'Achieved top-3 finish in a competitive hackathon focused on fintech innovations. Developed a machine learning solution for fraud detection and risk assessment, demonstrating proficiency in building production-grade systems under time constraints with real-world financial data.',
    },
    {
      title: '5th Place Finish',
      issuer: 'VIT Hack (graVITas 2019)',
      period: '2019',
      description:
        'Placed 5th in a prestigious 36-hour mega hackathon with industry-relevant problem statements from leading partners including Honeywell, HPE, and Autodesk. Built an end-to-end solution showcasing full-stack capabilities in problem-solving, system design, and rapid prototyping under competitive conditions.',
    },
  ]

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">Awards & Recognition</h2>

        <div className="space-y-12">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 mt-1"
              >
                <Award className="w-6 h-6 text-yellow-400" />
              </motion.div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white">{award.title}</h3>
                  <span className="text-sm text-slate-400 font-mono">{award.period}</span>
                </div>
                <p className="text-blue-400 font-semibold mb-3">{award.issuer}</p>
                <p className="text-slate-300 leading-relaxed">{award.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Awards

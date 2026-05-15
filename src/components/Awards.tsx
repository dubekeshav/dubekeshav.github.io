import { motion } from 'framer-motion'
import { Award } from 'lucide-react'


const Awards = () => {
  const awards = [
    {
  title: 'Rising Star Award',
  issuer: 'Data Engine',
  period: '2023',
  description:
    'Recognized for rapidly scaling ownership across data-driven product and backend engineering development, delivering high-impact solutions early in my tenure.',
},
{
  title: 'Client Hero Award',
  issuer: 'Data Engine',
  period: '2024',
  description:
    'Awarded for leading critical system design, client-facing initiatives and delivering solutions that directly improved operational efficiency and customer outcomes.',
},
{
  title: 'Top 3 Finish',
  issuer: 'Freecharge Hackathon',
  period: '2022',
  description:
    'Built a fintech solution in a couple of days and secured a top-3 finish among 32 engineering teams during Freecharge’s internal hackathon.',
},
{
  title: '5th Place Finish',
  issuer: 'VIT Hack (graVITas)',
  period: '2019',
  description:
    'Placed 5th in a 36-hour national hackathon by building an end-to-end product solution for real-world enterprise problem statements.',
}
  ]

  return (
    <section id="awards" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
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

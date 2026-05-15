import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  }

  return (
    <section ref={sectionRef} id="about" className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-12 text-white relative z-10"
      >
        About
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Sticky image with parallax + animated border */}
        <motion.div className="md:col-span-1 sticky top-24">
          <motion.div style={{ y: imageY }}>
            <div className="animated-border rounded-xl overflow-hidden">
              <motion.img
                src="/profile.jpg"
                alt="Keshav Dube"
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="w-full aspect-square object-cover"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Text with custom stagger */}
        <div className="md:col-span-1 space-y-6">
          {[
            "I am an AI Engineer and Data Scientist focused on building intelligent systems that combine machine learning, large language models, and scalable system design to solve real-world problems.",

            "With 5+ years of experience across ML engineering, backend development, and data systems, I specialize in building end-to-end solutions spanning predictive modeling, recommendation systems, retrieval-augmented generation, and agent-based AI workflows.",

            "A core part of my work lies in system design and performance optimization. I focus on designing architectures that are efficient, scalable, and production-ready—optimizing data pipelines, reducing latency, and engineering distributed systems that operate reliably at scale.",  

            "I completed my Master’s in Data Science in December 2025, where I deepened my expertise in natural language processing, causal inference, and deep learning. My experience spans building and optimizing production systems across enterprise and research environments, including ML pipelines, backend services, and large-scale data infrastructure.",

            "I am particularly interested in predictive modelling, multi-agent AI systems, and LLM-based applications that move beyond models into real, deployable intelligence systems.",

            "Outside of work, I enjoy sports, reading, and spending time with family and friends."
            





          ].map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-slate-300 text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

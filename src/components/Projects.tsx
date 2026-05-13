import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Recommendation Engine',
      description:
        'Built a personalized recommendation system using collaborative filtering and deep learning. Achieved 92% accuracy on test data.',
      tags: ['Python', 'TensorFlow', 'Pandas', 'SQL'],
      image: 'bg-gradient-to-br from-blue-500/20 to-purple-600/20',
      delay: 0,
    },
    {
      title: 'Real-Time Data Pipeline',
      description:
        'Designed and implemented a scalable data pipeline processing 1M+ events/day using Apache Kafka and Spark.',
      tags: ['Kafka', 'Spark', 'Python', 'AWS'],
      image: 'bg-gradient-to-br from-purple-500/20 to-pink-600/20',
      delay: 0.2,
    },
    {
      title: 'Natural Language Processing Suite',
      description:
        'Created NLP models for sentiment analysis, named entity recognition, and text classification with 87% F1 score.',
      tags: ['NLP', 'PyTorch', 'Transformers', 'BERT'],
      image: 'bg-gradient-to-br from-pink-500/20 to-blue-600/20',
      delay: 0.4,
    },
    {
      title: 'Computer Vision Application',
      description:
        'Developed object detection system for real-world applications with YOLOv8, achieving real-time inference.',
      tags: ['OpenCV', 'YOLOv8', 'Python', 'FastAPI'],
      image: 'bg-gradient-to-br from-blue-500/20 to-pink-600/20',
      delay: 0.6,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-12" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group cursor-pointer"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="glass rounded-lg overflow-hidden h-full"
            >
              {/* Project Image/Gradient */}
              <div className={`${project.image} h-48 relative overflow-hidden`}>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent to-blue-500/20"
                  animate={{ x: [0, 50, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-sm font-semibold transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Live
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 text-sm font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Projects

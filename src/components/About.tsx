import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Code2, BookOpen, Zap } from 'lucide-react'

const About = () => {
  const profiles = [
    {
      name: 'GitHub',
      url: 'https://github.com/dubeykeshav98',
      icon: Github,
      color: 'text-slate-300 hover:text-white hover:bg-slate-700',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/keshav-dube',
      icon: Linkedin,
      color: 'text-blue-400 hover:text-blue-300 hover:bg-blue-950',
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/dubeykeshav98/',
      icon: Code2,
      color: 'text-orange-400 hover:text-orange-300 hover:bg-orange-950',
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/dubeykeshav98',
      icon: Zap,
      color: 'text-green-400 hover:text-green-300 hover:bg-green-950',
    },
    {
      name: 'Kaggle',
      url: 'https://www.kaggle.com/keshav98',
      icon: BookOpen,
      color: 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950',
    },
    {
      name: 'Email',
      url: 'mailto:dubeykeshav98@gmail.com',
      icon: Mail,
      color: 'text-red-400 hover:text-red-300 hover:bg-red-950',
    },
  ]
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">About</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="sticky top-24">
              <div className="w-full aspect-square rounded-lg overflow-hidden border-2 border-slate-700 hover:border-blue-500 transition-colors group">
                <img src="/profile.jpg" alt="Keshav Dubey" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
            </div>
          </motion.div>

          {/* Text Section */}
          <div className="md:col-span-2 space-y-6 text-slate-300 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I am a data scientist and AI engineer passionate about building intelligent systems that solve real-world problems. With 5+ years of experience in machine learning, data engineering, and software development, I specialize in designing scalable solutions that transform data into actionable insights.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              I recently completed my Master's in Data Science, where I deepened my expertise in causal inference, natural language processing, and deep learning. My background spans roles as a Machine Learning Engineer, Backend Engineer, Senior Data Scientist, and Research Scientist, where I've led initiatives in AI systems, distributed computing, and financial intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              I'm particularly interested in building multi-agent AI systems, retrieval-augmented generation (RAG), large language models, and applying advanced statistical methods to solve complex challenges. When I'm not coding or building models, I enjoy exploring the intersection of AI ethics, system design, and practical applications.
            </motion.p>
          </div>
        </div>

      </motion.div>
    </section>
  )
}

export default About

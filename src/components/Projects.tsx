import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Github } from 'lucide-react'
import { overlayVariants, pillVariants } from '../utils/motionVariants'

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const headerY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: 'Multi-Agent Financial Intelligence Chatbot',
      description:
        'An intelligent financial advisor system that helps users optimize portfolios, evaluate trading strategies, and get personalized investment insights. The system uses multiple AI agents working together to analyze market data in real-time and provide actionable recommendations. Built with modern LLM frameworks and real-time market feeds for fast decision-making.',
      technologies: ['Python', 'LangGraph', 'MCP', 'FastAPI', 'Langchain', 'OpenAI'],
      github: 'https://github.com/dubeykeshav98/financial-intelligence-chatbot',
    },
    {
      title: 'Soccer Player Performance & Injury Risk Modeling',
      description:
        'A sports analytics system that evaluates player performance while accounting for team dynamics, opponent strength, and match conditions. The project includes sophisticated injury risk prediction models using survival analysis, helping coaches make data-driven decisions about training loads and player substitutions.',
      technologies: ['Python', 'R', 'XGBoost', 'Survival Analysis', 'Causal Inference', 'Bayesian Methods'],
      github: 'https://github.com/dubeykeshav98/soccer-performance-analytics',
    },
    {
      title: 'Medical RAG Chatbot',
      description:
        'A specialized medical Q&A system that provides accurate, fact-based answers to clinical questions by searching through curated medical literature. The system uses advanced retrieval techniques and fine-tuned language models to reduce hallucinations and ensure responses are grounded in real medical knowledge.',
      technologies: ['Python', 'LLaMA', 'Pinecone', 'RAG', 'PostgreSQL', 'PEFT', 'LoRA', 'Hugging Face'],
      github: 'https://github.com/dubeykeshav98/medical-rag-chatbot',
    },
    {
      title: 'Customer Analytics & Segmentation System',
      description:
        'A comprehensive analytics platform that discovers meaningful customer groups and behavioral patterns using clustering and statistical analysis. The system includes interactive dashboards that help teams understand their customer base and make targeted decisions about marketing and engagement strategies.',
      technologies: ['Python', 'SQL', 'Scikit-learn', 'Tableau', 'Data Analysis'],
      github: 'https://github.com/dubeykeshav98/customer-segmentation-analytics',
    },
  ]

  return (
    <section ref={sectionRef} id="projects" className="py-12 overflow-hidden relative">

      {/* Parallax section header */}
      <motion.div style={{ y: headerY }} className="px-8 max-w-7xl mx-auto mb-12 relative z-10">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <p className="text-slate-400 mt-2 text-lg">Selected work and explorations</p>
      </motion.div>

      {/* Horizontal scroll track */}
      <div className="flex gap-6 overflow-x-auto px-8 pb-8 snap-x snap-mandatory scrollbar-hide relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="w-[380px] flex-shrink-0 snap-center glass glass-hover rounded-2xl overflow-hidden relative group"
            style={{ minHeight: 420 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
            whileHover={{ scale: 1.02, y: -8 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '0px -100px 0px 0px' }}
            data-cursor-hover
          >
            {/* Card number / accent */}
            <div className="absolute top-6 right-6 text-6xl font-black text-white/5 select-none pointer-events-none">
              {String(index + 1).padStart(2, '0')}
            </div>

            {/* Always-visible content */}
            <div className="p-8 h-full flex flex-col">
              <h3 className="text-xl font-bold text-white mb-3 leading-tight pr-8">{project.title}</h3>

              {/* Hover hint when not hovered */}
              {hoveredIndex !== index && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-slate-400 italic mb-4"
                >
                  Hover to see details
                </motion.p>
              )}

              {/* Description — revealed on hover via AnimatePresence */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="flex-1"
                  >
                    <motion.p variants={pillVariants} className="text-slate-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </motion.p>

                    {/* Tech pills stagger in */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, ti) => (
                        <motion.span
                          key={ti}
                          variants={pillVariants}
                          className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Always-visible tech summary (first 3 only) when not hovered */}
              {hoveredIndex !== index && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 3).map((tech, ti) => (
                    <span key={ti} className="px-2 py-0.5 rounded text-xs bg-slate-700/60 text-slate-400">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-xs text-slate-500">+{project.technologies.length - 3}</span>
                  )}
                </div>
              )}

              {/* Links */}
              <div className="flex gap-4 mt-6 pt-4 border-t border-slate-700/50">
                <motion.a
                  href={project.github}
                  whileHover={{ x: 4 }}
                  className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white text-sm font-medium"
                  data-cursor-hover
                >
                  <Github className="w-4 h-4" /> GitHub
                </motion.a>
              </div>
            </div>

            {/* Glow border on hover */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              animate={
                hoveredIndex === index
                  ? { boxShadow: '0 0 40px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255,255,255,0.08)' }
                  : { boxShadow: 'none' }
              }
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

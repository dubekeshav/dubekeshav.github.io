import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Multi-Agent Financial Intelligence Chatbot',
      description:
        'An intelligent financial advisor system that helps users optimize portfolios, evaluate trading strategies, and get personalized investment insights. The system uses multiple AI agents working together to analyze market data in real-time and provide actionable recommendations. Built with modern LLM frameworks and real-time market feeds for fast decision-making.',
      technologies: ['Python', 'LangGraph', 'MCP', 'FastAPI', 'Langchain', 'OpenAI'],
      github: '#',
      live: '#',
    },
    {
      title: 'Soccer Player Performance & Injury Risk Modeling',
      description:
        'A sports analytics system that evaluates player performance while accounting for team dynamics, opponent strength, and match conditions. The project includes sophisticated injury risk prediction models using survival analysis, helping coaches make data-driven decisions about training loads and player substitutions.',
      technologies: ['Python', 'R', 'XGBoost', 'Survival Analysis', 'Causal Inference', 'Bayesian Methods'],
      github: '#',
      live: '#',
    },
    {
      title: 'Medical RAG Chatbot',
      description:
        'A specialized medical Q&A system that provides accurate, fact-based answers to clinical questions by searching through curated medical literature. The system uses advanced retrieval techniques and fine-tuned language models to reduce hallucinations and ensure responses are grounded in real medical knowledge.',
      technologies: ['Python', 'LLaMA', 'Pinecone', 'RAG', 'PostgreSQL', 'PEFT', 'LoRA', 'Hugging Face'],
      github: '#',
      live: '#',
    },
    {
      title: 'Customer Analytics & Segmentation System',
      description:
        'A comprehensive analytics platform that discovers meaningful customer groups and behavioral patterns using clustering and statistical analysis. The system includes interactive dashboards that help teams understand their customer base and make targeted decisions about marketing and engagement strategies.',
      technologies: ['Python', 'SQL', 'Scikit-learn', 'Tableau', 'Data Analysis'],
      github: '#',
      live: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-12 text-white">Projects</h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-slate-700 pb-12 last:border-b-0"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

              <p className="text-slate-300 text-base leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.live}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

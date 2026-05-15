import { motion, AnimatePresence } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch('https://formspree.io/f/mqenvqvl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '' })
          setSubmitted(false)
        }, 3000)
      } else {
        console.error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-12">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto glass rounded-2xl p-8"
        >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                  Your Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email Address
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-blue-500 focus:outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  whileFocus={{ scale: 1.02 }}
                  className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-blue-500 focus:outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                data-cursor-hover
              >
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      ✓ Message Sent!
                    </motion.span>
                  ) : (
                    <motion.span
                      key="send"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Contact

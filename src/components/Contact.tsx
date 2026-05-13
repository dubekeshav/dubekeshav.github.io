import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dubeykeshav98@gmail.com',
      href: 'mailto:dubeykeshav98@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (XXX) XXX-XXXX',
      href: 'tel:+1XXXXXXXXXX',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Your City, Country',
      href: '#',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 gradient-text">
          Let's Work Together
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-12" />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-300 mb-8"
          >
            Have a project in mind? Let's discuss how I can help bring your ideas to life with data-driven solutions and cutting-edge technology.
          </motion.p>

          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <motion.a
                key={index}
                href={method.href}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="group flex items-center gap-4 p-4 rounded-lg glass hover:bg-blue-500/10 transition-all"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all">
                  <Icon className="w-6 h-6 text-blue-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">{method.label}</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {method.value}
                  </p>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form
            onSubmit={handleSubmit}
            className="glass rounded-lg p-8 space-y-6"
          >
            {/* Name Input */}
            <motion.div
              whileHover={{ y: -2 }}
              className="group"
            >
              <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600/30 text-white focus:border-blue-500 focus:bg-slate-800 focus:outline-none transition-all"
                placeholder="John Doe"
              />
            </motion.div>

            {/* Email Input */}
            <motion.div
              whileHover={{ y: -2 }}
              className="group"
            >
              <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600/30 text-white focus:border-blue-500 focus:bg-slate-800 focus:outline-none transition-all"
                placeholder="john@example.com"
              />
            </motion.div>

            {/* Message Input */}
            <motion.div
              whileHover={{ y: -2 }}
              className="group"
            >
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-600/30 text-white focus:border-blue-500 focus:bg-slate-800 focus:outline-none transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={submitted}
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold text-white flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/50 transition-all disabled:opacity-50"
            >
              {submitted ? (
                <>
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    ✓
                  </motion.span>
                  Message Sent!
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

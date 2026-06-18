import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { Mail, Linkedin, Download, Send } from 'lucide-react'

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

export default function Contact({ theme }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <SectionWrapper id="contact">
      <SectionTitle title="Get In Touch" subtitle="Let's connect and create something amazing together" theme={theme} />

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h3 className={`text-2xl font-bold font-[family-name:var(--font-heading)] mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              Let's Talk
            </h3>
            <p className={`text-base ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
            }`}>
              I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!
            </p>
          </div>

          {/* Contact details */}
          <div className="space-y-4">
            <a href="mailto:hbhoomi2004@gmail.com" className={`flex items-center gap-4 p-4 glass rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              theme === 'dark' ? 'hover:bg-blue-600/10' : 'hover:bg-black/5'
            }`}>
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                <Mail size={18} className="text-white" />
              </div>
              <div>
                <p className={`text-xs ${
                  theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
                }`}>Email</p>
                <p className={`text-sm font-medium ${
                  theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
                }`}>hbhoomi2004@gmail.com</p>
              </div>
            </a>
          </div>

          {/* Social buttons */}
          <div className="flex flex-wrap gap-3">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              href="https://www.linkedin.com/in/bhoomika-k-computer-science-engineering"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5]/20 font-medium text-sm transition-all duration-300"
            >
              <Linkedin size={18} />
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              href="https://github.com/Bhoomika716"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                theme === 'dark'
                  ? 'bg-white/5 text-slate-300 hover:bg-blue-600/20 hover:text-white'
                  : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
              }`}
            >
              <GithubIcon />
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              href="#"
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600/10 to-cyan-600/10 text-blue-400 hover:from-blue-600/20 hover:to-cyan-600/20 font-medium text-sm transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="glass glow-shadow-blue rounded-2xl p-6 md:p-8 space-y-5">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/5 text-white focus:border-blue-500/50 focus:bg-white/8 placeholder-slate-500'
                    : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500/50 focus:bg-white placeholder-slate-400'
                }`}
                placeholder="Your name"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/5 text-white focus:border-blue-500/50 focus:bg-white/8 placeholder-slate-500'
                    : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500/50 focus:bg-white placeholder-slate-400'
                }`}
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
              }`}>Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className={`w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/5 text-white focus:border-blue-500/50 focus:bg-white/8 placeholder-slate-500'
                    : 'bg-slate-50 border border-slate-200 text-slate-900 focus:border-blue-500/50 focus:bg-white placeholder-slate-400'
                }`}
                placeholder="Your message..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              {submitted ? (
                <span>Message Sent! ✨</span>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

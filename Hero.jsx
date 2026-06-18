import { motion } from 'framer-motion'
import { ChevronDown, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const roles = [
  'B.Tech CSE Student',
  'Data Science Enthusiast',
  'Full Stack Developer',
  'Machine Learning Explorer',
  'Problem Solver',
]

export default function Hero({ theme }) {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1))
      }, 30)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1))
      }, 80)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect fill='%230F172A' width='1920' height='1080'/%3E%3C/svg%3E"
        >
          <source src="https://cdn.pixabay.com/video/2020/08/09/46648-449623750_large.mp4" type="video/mp4" />
        </video>
        <div className={`absolute inset-0 ${
          theme === 'dark'
            ? 'bg-gradient-to-b from-[#0F172A]/70 via-[#0F172A]/50 to-[#0F172A]'
            : 'bg-gradient-to-b from-white/70 via-white/50 to-[#F8FAFC]'
        }`} />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px] animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className={`text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}>
            Welcome to my portfolio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[family-name:var(--font-heading)] mb-6 leading-tight"
        >
          <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>K </span>
          <span className="gradient-text">Bhoomika</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-8 md:h-10 mb-8"
        >
          <span className={`text-lg md:text-xl lg:text-2xl font-light ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {displayText}
            <span className="inline-block w-[2px] h-6 bg-blue-500 ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold text-sm md:text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
          >
            <Mail size={18} />
            Get In Touch
          </a>
          <a
            href="#projects"
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 border ${
              theme === 'dark'
                ? 'border-white/10 text-white hover:bg-blue-600/10 hover:border-blue-500/30'
                : 'border-slate-300 text-slate-700 hover:bg-slate-100'
            }`}
          >
            View Projects
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`flex flex-col items-center gap-2 ${
            theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          <span className="text-xs tracking-widest uppercase">Scroll Down</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  )
}

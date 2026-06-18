import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') || 'dark'
    setTheme(saved)
    document.body.className = saved
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.body.className = next
    localStorage.setItem('portfolio-theme', next)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0F172A] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-slate-900'} transition-colors duration-300`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Skills theme={theme} />
      <Projects theme={theme} />
      <Experience theme={theme} />
      <Achievements theme={theme} />
      <Certifications theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  )
}

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { Code2, Brain, Layers, Users, Trophy } from 'lucide-react'

const highlights = [
  { icon: Code2, label: '100+ DSA Problems Solved', color: 'from-blue-600 to-blue-800' },
  { icon: Brain, label: 'Machine Learning Intern', color: 'from-cyan-500 to-cyan-700' },
  { icon: Layers, label: 'Full Stack Developer', color: 'from-blue-500 to-cyan-500' },
  { icon: Trophy, label: 'Data Science Enthusiast', color: 'from-sky-500 to-blue-600' },
  { icon: Users, label: 'Team Leader in Robotics', color: 'from-teal-500 to-cyan-600' },
]

export default function About({ theme }) {
  return (
    <SectionWrapper id="about">
      <SectionTitle title="About Me" subtitle="Passionate about building innovative solutions" theme={theme} />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className={`text-base md:text-lg leading-relaxed mb-6 ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            I am a Computer Science student passionate about <span className="text-blue-400 font-medium font-[family-name:var(--font-heading)]">Data Science</span>, <span className="text-cyan-400 font-medium font-[family-name:var(--font-heading)]">Machine Learning</span>, <span className="text-sky-400 font-medium font-[family-name:var(--font-heading)]">Full Stack Development</span>, and <span className="text-teal-400 font-medium font-[family-name:var(--font-heading)]">Problem Solving</span>.
          </p>
          <p className={`text-base md:text-lg leading-relaxed ${
            theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
          }`}>
            I enjoy building impactful software solutions and continuously improving my technical skills through projects, internships, and coding practice.
          </p>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              whileHover={{ scale: 1.03, y: -4 }}
              className={`glass glow-shadow-blue rounded-2xl p-5 cursor-default group transition-all duration-300 ${
                i === 4 ? 'sm:col-span-2' : ''
              }`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={20} className="text-white" />
              </div>
              <p className={`text-sm font-semibold ${
                theme === 'dark' ? 'text-slate-200' : 'text-slate-800'
              }`}>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

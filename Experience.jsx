import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { Briefcase } from 'lucide-react'

const experiences = [
  {
    title: 'Machine Learning Intern',
    description: 'Worked on healthcare prediction systems using advanced ML techniques.',
    tools: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    color: 'from-blue-600 to-cyan-500',
    icon: '🧠',
  },
  {
    title: 'Web Development Intern',
    description: 'Built responsive and modern web applications with cutting-edge technologies.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Web Design'],
    color: 'from-cyan-500 to-blue-600',
    icon: '💻',
  },
]

export default function Experience({ theme }) {
  return (
    <SectionWrapper id="experience">
      <SectionTitle title="Experience" subtitle="Professional internships and work experience" theme={theme} />

      <div className="max-w-3xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="glass glow-shadow-blue rounded-2xl p-6 md:p-8 relative overflow-hidden group"
          >
            <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${exp.color} transition-all duration-300 group-hover:w-1.5`} />
            
            <div className="flex items-start gap-4 ml-4">
              <div className="text-3xl">{exp.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={16} className="text-blue-400" />
                  <span className={`text-xs font-medium uppercase tracking-wider ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>Internship</span>
                </div>
                <h3 className={`text-xl md:text-2xl font-bold font-[family-name:var(--font-heading)] mb-3 ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {exp.title}
                </h3>
                <p className={`text-sm md:text-base mb-4 ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tools.map((tool) => (
                    <span
                      key={tool}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                        theme === 'dark'
                          ? 'bg-white/5 text-slate-300 hover:bg-blue-600/20'
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      } transition-colors duration-300`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-600 to-cyan-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend',
    color: 'from-cyan-500 to-blue-500',
    skills: ['Node.js', 'Express.js', 'Firebase'],
  },
  {
    title: 'Database',
    color: 'from-sky-500 to-blue-600',
    skills: ['MongoDB', 'MySQL', 'Supabase'],
  },
  {
    title: 'Programming',
    color: 'from-blue-500 to-indigo-600',
    skills: ['Java', 'Python', 'C'],
  },
  {
    title: 'Data Science',
    color: 'from-teal-500 to-cyan-500',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
  },
]

export default function Skills({ theme }) {
  return (
    <SectionWrapper id="skills">
      <SectionTitle title="Skills" subtitle="Technologies and tools I work with" theme={theme} />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            whileHover={{ y: -6 }}
            className={`glass glow-shadow-blue rounded-2xl p-6 group transition-all duration-300 ${
              catIndex === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color}`} />
              <h3 className={`text-lg font-bold font-[family-name:var(--font-heading)] ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                  whileHover={{ scale: 1.08 }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-default ${
                    theme === 'dark'
                      ? 'bg-white/5 text-slate-300 hover:bg-blue-600/20 hover:text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

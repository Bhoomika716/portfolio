import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { Trophy, Code2, Layers, Brain, Users, Zap } from 'lucide-react'

const achievements = [
  { icon: Code2, title: 'Solved 100+ DSA Problems', desc: 'Consistent competitive programming practice', color: 'from-blue-600 to-cyan-500' },
  { icon: Layers, title: 'Built Multiple Full Stack Projects', desc: 'End-to-end web application development', color: 'from-cyan-500 to-blue-500' },
  { icon: Brain, title: 'ML Internship Completed', desc: 'Healthcare prediction systems', color: 'from-sky-500 to-blue-600' },
  { icon: Users, title: 'Robotics Team Leadership', desc: 'Led team in autonomous robot projects', color: 'from-blue-500 to-indigo-600' },
  { icon: Zap, title: 'Strong Problem Solving Skills', desc: 'Analytical and logical thinking', color: 'from-teal-500 to-cyan-500' },
]

export default function Achievements({ theme }) {
  return (
    <SectionWrapper id="achievements">
      <SectionTitle title="Achievements" subtitle="Milestones and accomplishments" theme={theme} />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`glass glow-shadow-blue rounded-2xl p-6 pt-8 text-center group cursor-default relative overflow-hidden ${
              index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-600 to-cyan-500 opacity-90 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />

            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
              <achievement.icon size={24} className="text-white" />
            </div>
            <h3 className={`text-base font-bold font-[family-name:var(--font-heading)] mb-2 ${
              theme === 'dark' ? 'text-white' : 'text-slate-900'
            }`}>
              {achievement.title
            }</h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              {achievement.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

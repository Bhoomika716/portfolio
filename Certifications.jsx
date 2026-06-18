import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { Award, ExternalLink } from 'lucide-react'

const certifications = [
  {
    title: 'Machine Learning Internship',
    issuer: 'Professional Certification',
    color: 'from-blue-600 to-cyan-500',
    icon: '🧠',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Professional Certification',
    color: 'from-cyan-500 to-blue-600',
    icon: '💻',
  },
  {
    title: 'Data Analytics Certificate',
    issuer: 'Technical Certification',
    color: 'from-sky-500 to-blue-600',
    icon: '📊',
  },
  {
    title: 'Technical Training Certificate',
    issuer: 'Training Certification',
    color: 'from-blue-500 to-indigo-600',
    icon: '🎓',
  },
]

export default function Certifications({ theme }) {
  return (
    <SectionWrapper id="certifications">
      <SectionTitle title="Certifications" subtitle="Professional certificates and recognitions" theme={theme} />

      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="glass glow-shadow-blue rounded-2xl p-6 group cursor-default relative overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.color} opacity-5 rounded-bl-full transition-all duration-300 group-hover:opacity-10 group-hover:w-40 group-hover:h-40`} />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="text-3xl">{cert.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Award size={14} className="text-blue-400" />
                  <span className={`text-xs font-medium ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`}>{cert.issuer}</span>
                </div>
                <h3 className={`text-base font-bold font-[family-name:var(--font-heading)] ${
                  theme === 'dark' ? 'text-white' : 'text-slate-900'
                }`}>
                  {cert.title}
                </h3>
              </div>
              <ExternalLink size={16} className={`${
                theme === 'dark' ? 'text-slate-500 group-hover:text-slate-300' : 'text-slate-400 group-hover:text-slate-600'
              } transition-colors duration-300 mt-1`} />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

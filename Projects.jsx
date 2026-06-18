import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { ExternalLink, Shield, Bot, HeartPulse, Activity, Globe } from 'lucide-react'

const projects = [
  {
    title: 'RiseHer',
    subtitle: 'Women Safety App',
    icon: Shield,
    color: 'from-blue-600 to-cyan-500',
    features: ['SOS Alert', 'Shake Detection', 'Live Location Sharing', 'Emergency Contact System', 'Android Application'],
    gradient: 'from-blue-950/40 to-cyan-950/40',
    link: 'https://github.com/Bhoomika716',
  },
  {
    title: 'Autonomous Robo Car',
    subtitle: 'Robotics Project',
    icon: Bot,
    color: 'from-sky-500 to-blue-600',
    features: ['Obstacle Detection', 'Sensor Integration', 'Team Leadership', 'Robotics Development'],
    gradient: 'from-sky-950/40 to-blue-950/40',
    link: 'https://github.com/Bhoomika716',
  },
  {
    title: 'Breast Cancer Prediction',
    subtitle: 'ML Classification System',
    icon: HeartPulse,
    color: 'from-blue-600 to-indigo-600',
    features: ['Machine Learning', 'Data Analysis', 'Classification Model', 'Healthcare Dataset'],
    gradient: 'from-blue-950/40 to-indigo-950/40',
    link: 'https://github.com/Bhoomika716/Data-Science-Project',
  },
  {
    title: 'Glucose Level Prediction',
    subtitle: 'Predictive Analytics',
    icon: Activity,
    color: 'from-cyan-500 to-teal-500',
    features: ['Predictive Analytics', 'Healthcare Data', 'Machine Learning'],
    gradient: 'from-cyan-950/40 to-teal-950/40',
    link: 'https://github.com/Bhoomika716/Data-Science-Project',
  },
  {
    title: 'Personal Portfolio',
    subtitle: 'Web Application',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    features: ['React', 'Tailwind CSS', 'Responsive Design'],
    gradient: 'from-blue-950/40 to-cyan-950/40',
    link: 'https://github.com/Bhoomika716',
  },
]

export default function Projects({ theme }) {
  return (
    <SectionWrapper id="projects">
      <SectionTitle title="Projects" subtitle="Featured work and creative solutions" theme={theme} />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
            className={`glass glow-shadow-blue rounded-2xl overflow-hidden group cursor-default ${
              index === 3 ? 'md:col-span-1' : ''
            } ${
              index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Project Header */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden block cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <project.icon size={48} className="text-white/80 relative z-10" />
              </motion.div>
              <div className="absolute top-4 right-4">
                <ExternalLink size={16} className="text-white/40 group-hover:text-white/80 transition-colors duration-300" />
              </div>
            </a>

            {/* Project Content */}
            <div className="p-6">
              <h3 className={`text-lg font-bold font-[family-name:var(--font-heading)] mb-1 ${
                theme === 'dark' ? 'text-white' : 'text-slate-900'
              }`}>{project.title}</h3>
              <p className={`text-sm mb-4 ${
                theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
              }`}>{project.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className={`px-3 py-1 rounded-lg text-xs font-medium ${
                      theme === 'dark'
                        ? 'bg-white/5 text-slate-300'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}

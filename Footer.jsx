import { Heart, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer({ theme }) {
  return (
    <footer className={`py-12 px-4 border-t ${
      theme === 'dark' ? 'border-white/5' : 'border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold font-[family-name:var(--font-heading)]">
              <span className="gradient-text">K Bhoomika</span>
            </a>
            <p className={`text-sm mt-2 ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>
              B.Tech CSE Student | Building the future with code
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-sm ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>Made with</span>
            <Heart size={14} className="text-cyan-500 fill-cyan-500" />
            <span className={`text-sm ${
              theme === 'dark' ? 'text-slate-400' : 'text-slate-500'
            }`}>by K Bhoomika</span>
          </div>

          <motion.a
            href="#home"
            whileHover={{ y: -4 }}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-white/5 text-slate-300 hover:bg-blue-600/20 hover:text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            <ArrowUp size={18} />
          </motion.a>
        </div>

        <div className={`text-center mt-8 pt-8 border-t ${
          theme === 'dark' ? 'border-white/5' : 'border-slate-200'
        }`}>
          <p className={`text-xs ${
            theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
          }`}>
            © {new Date().getFullYear()} K Bhoomika. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

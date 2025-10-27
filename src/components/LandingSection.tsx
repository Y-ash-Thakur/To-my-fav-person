import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function LandingSection() {
  return (
    <section className="h-screen relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-200 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-rose-200 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-100 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-7xl font-light text-gray-800 mb-4 tracking-tight"
        >
          Our Story So Far
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl text-gray-600 font-light mb-16"
        >
          A journey through our beautiful moments
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: 'reverse', repeatDelay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm text-gray-500 font-light tracking-wide">scroll to begin</span>
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

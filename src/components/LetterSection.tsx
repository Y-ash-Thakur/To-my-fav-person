import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface LetterSectionProps {
  message: string;
}

export default function LetterSection({ message }: LetterSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-pink-50" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-rose-300 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-300 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        className="relative z-10 max-w-3xl w-full"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-16 border border-rose-100">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: false }}
            className="flex justify-center mb-8"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-white fill-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-8"
          >
            A Letter for You
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: false }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-center md:text-left font-light text-lg">
              {message}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false }}
            className="mt-12 text-right"
          >
            <p className="text-gray-600 font-light italic">With all my love,</p>
            <p className="text-gray-800 font-light text-xl mt-2"> — Yash❤️</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

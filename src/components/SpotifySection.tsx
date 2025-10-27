import { motion } from 'framer-motion';
import { Music } from 'lucide-react';

interface SpotifySectionProps {
  playlistUrl?: string;
}

export default function SpotifySection({ playlistUrl }: SpotifySectionProps) {
  const embedUrl = playlistUrl
    ? playlistUrl.replace('spotify.com/playlist/', 'spotify.com/embed/playlist/')
    : '';

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, margin: '-100px' }}
        className="max-w-2xl w-full text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
          className="flex justify-center mb-8"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
            <Music className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="text-4xl md:text-5xl font-light text-white mb-4"
        >
          Play Our Songs
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: false }}
          className="text-gray-400 font-light text-lg mb-12"
        >
          Every moment has its soundtrack
        </motion.p>

        {embedUrl ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src={embedUrl}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-2xl"
            />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: false }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20"
          >
            <p className="text-gray-300 font-light text-lg">
              Add your Spotify playlist URL to share your favorite songs together
            </p>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: false }}
          className="text-gray-500 font-light text-sm mt-16"
        >
          Made with love for you
        </motion.p>
      </motion.div>
    </section>
  );
}

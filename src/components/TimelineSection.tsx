import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TimelineSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  Date: string;
}

// 🎨 Cinematic warm gradient palette
const gradients = [
  "bg-gradient-to-br from-rose-50 via-amber-50 to-orange-50",
  "bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50",
  "bg-gradient-to-br from-orange-50 via-rose-50 to-amber-50",
  "bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50",
  "bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50",
  "bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50",
];

export default function TimelineSection({
  title,
  description,
  imageUrl,
  index,
  Date,
}: TimelineSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, -100]
  );

  const isLeft = index % 2 === 0;
  const bg = gradients[index % gradients.length];

  return (
    <section
      ref={ref}
      className={`
        relative min-h-screen flex items-center justify-center 
        py-20 px-4 md:px-8 
        ${bg}
      `}
    >
      {/* Soft cinematic overlay glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none" />

      <motion.div
        style={{ opacity, scale, y }}
        className={`relative max-w-6xl w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
          isLeft ? "" : "md:direction-rtl"
        }`}
      >
        {/* Image Section */}
        <div className={`relative ${isLeft ? "" : "md:direction-ltr"}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, margin: "-100px" }}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false, margin: "-100px" }}
          className={`space-y-6 ${isLeft ? "" : "md:direction-ltr"}`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-rose-400 leading-tight">
            {title}
          </h2>

          <h3 className="text-3xl md:text-4xl font-light text-rose-400 leading-tight">
            {Date}
          </h3>

          <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed">
            {description}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

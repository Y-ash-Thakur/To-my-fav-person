"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SimpleLoading = () => {
  const [show, setShow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const texts = [
    "दिशा ❤️", 
    "Disha ❤️",       
    "দিশা ❤️",        
    "ದಿಶಾ ❤️",        
    "દિશા ❤️",        
    "దిశ ❤️",         
    "திசா ❤️",        
    "दिशा ❤️",        
    "ദിശ ❤️",      
    "ਦਿਸ਼ਾ ❤️",       
    "ଦିଶା ❤️",      
  ];  

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 400);

    const timer = setTimeout(() => {
      setShow(false);
      clearInterval(textInterval);
    },7000);

    return () => {
      clearTimeout(timer);
      clearInterval(textInterval);
    }
  }, [texts.length]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ scale: 0.8, opacity: 0, y:20 }}
              animate={{ scale: 1, opacity: 1, y:0 }}
              exit={{ scale: 1.2, opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl text-white font-bold text-center"
            >
              {texts[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SimpleLoading;
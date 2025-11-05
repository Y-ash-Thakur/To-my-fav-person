"use client";
import { useEffect, useState, useRef } from "react";

const SimpleLoading = ({ onComplete }: { onComplete: () => void }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [loadingStarted, setLoadingStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const texts = [
    "Disha ❤️",       
    "दिशा ❤️", 
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

  const handleUserInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      setLoadingStarted(true);
      
      // Start audio
      if (audioRef.current) {
        audioRef.current.play().catch(console.error);
      }

      // Set a timer to complete loading after 12 seconds FROM CLICK
      const timer = setTimeout(() => {
        if(audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
        onComplete(); // Notify App.tsx that loading is complete
      }, 11000);

      return () => clearTimeout(timer);
    }
  };

  useEffect(() => {
    // Initialize audio but don't play immediately
    audioRef.current = new Audio('/music/starting_track_trimmed.mp3');
    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;

    return () => {
      // Cleanup audio
      if(audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);

  useEffect(() => {
    if (!loadingStarted) return;

    const changeText = () => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === texts.length - 1) {
          return 0;
        }
        return prevIndex + 1;
      });
    };

    const timers: NodeJS.Timeout[] = [];

    // First text stays for 4.5 seconds (from click)
    timers.push(setTimeout(() => {
      changeText();
    }, 4500));

    // Then change text every 350ms indefinitely
    let accumulatedTime = 4500;

    for(let i = 0; i < 100; i++) {
      timers.push(
        setTimeout(() => {
          changeText();
        }, accumulatedTime)
      ); 
      accumulatedTime += 350;
    }

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [loadingStarted, texts.length]);

  return (
    <div 
      className="fixed inset-0 bg-black flex items-center justify-center cursor-pointer"
      onClick={handleUserInteraction}
    >
      {/* Initial click prompt */}
      {!hasInteracted && (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-8xl text-white font-bold text-center mb-8">
            Disha ❤️
          </h1>
          <div className="text-white text-lg text-center px-4">
            Click anywhere to begin!! 🫶🏻
          </div>
        </div>
      )}

      {/* Text changes after click - no animations */}
      {hasInteracted && (
        <h1 className="text-6xl md:text-8xl text-white font-bold text-center">
          {texts[currentIndex]}
        </h1>
      )}
    </div>
  )
}

export default SimpleLoading;
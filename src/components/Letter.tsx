import { useEffect, useRef, useState } from 'react';

const letterText = `My Dearest Love,

As I write this, my heart overflows with feelings that words can barely capture. Every day with you is a gift, every moment a treasure I hold close to my heart.

From the first time we met, I knew there was something magical about you. Your smile lights up my darkest days, your laughter is music to my soul, and your love is the anchor that keeps me grounded.

You've shown me what it means to truly love and be loved. You've taught me patience, kindness, and the beauty of sharing life's journey with someone special. With you, even the ordinary moments become extraordinary.

Today, on your birthday, I want you to know how incredibly blessed I feel to have you in my life. You are my best friend, my partner, my everything. Thank you for being you - beautiful, compassionate, strong, and endlessly amazing.

Here's to another year of adventures, laughter, growth, and love. Here's to us, and all the beautiful moments yet to come.

Happy Birthday, my love. I love you more than words can express.

Forever yours,
[Your Name]`;

export const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < letterText.length) {
        setDisplayedText((prev) => prev + letterText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-4 md:px-8 bg-gradient-romantic-soft"
    >
      <div className="max-w-4xl mx-auto w-full">
        <div className="glass rounded-3xl p-8 md:p-12 shadow-romantic">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient">
            A Letter From My Heart
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="whitespace-pre-wrap text-foreground/90 leading-relaxed font-inter text-base md:text-lg">
              {displayedText}
              <span className="inline-block w-0.5 h-6 bg-romantic-rose animate-pulse-slow ml-1"></span>
            </p>
          </div>
          <p className="text-center mt-8 text-muted-foreground italic text-sm">
            💡 Tip: Customize the letter text in LoveLetter.tsx component
          </p>
        </div>
      </div>
    </section>
  );
};

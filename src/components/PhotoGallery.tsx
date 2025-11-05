import { useState } from 'react';
import { X } from 'lucide-react';
import meet1 from '../assets/images/1st_meet.jpg';
import meet2 from '../assets/images/2nd_meet.jpg';
import meet3 from '../assets/images/3rd_meet.jpg';
import meet4 from '../assets/images/4th_meet.jpg';
import meet5 from '../assets/images/5th_meet.jpg';
import meet6 from '../assets/images/6th_meet.jpg';
import meet7 from '../assets/images/holding_hands.jpg';

const galleryImages = [
  { id: 1, src: meet1, alt: 'Memory 1' },
  { id: 2, src: meet2, alt: 'Memory 2' },
  { id: 3, src: meet3, alt: 'Memory 3' },
  { id: 4, src: meet4, alt: 'Memory 4' },
  { id: 5, src: meet5, alt: 'Memory 5' },
  { id: 6, src: meet6, alt: 'Memory 6' },
  { id: 7, src: meet7, alt: 'Memory 7' },
  { id: 8, src: '/placeholder.svg', alt: 'Memory 8' },
];

export const PhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section className="py-20 px-4 md:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient">
            Us So Far ✨
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl aspect-square"
                onClick={() => setSelectedImage(index)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-romantic opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-10"></div>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

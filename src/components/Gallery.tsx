/**
 * Gallery Component
 * Masonry grid with scroll-triggered entrance animations,
 * now using locally imported assets for production readiness.
 */

import React from 'react';
import { motion } from 'framer-motion';

// Import local images from the assets directory
import img1 from '../assets/unnamed (1).png';
import img2 from '../assets/IMG-20241214-WA0005.webp';
import img3 from '../assets/IMG-20241214-WA0002.webp';
import img4 from '../assets/unnamed.png';
import img5 from '../assets/image-couple.jpg';
import img6 from '../assets/IMG-20241214-WA0007.webp';

// Dynamically mapped local assets
const localGalleryItems = [
  { id: 1, url: img1, aspect: "aspect-[4/5]", dateLabel: "II. XXIV. MMXXIV" },
  { id: 2, url: img2, aspect: "aspect-square" },
  { id: 3, url: img3, aspect: "aspect-[3/4]" },
  { id: 4, url: img4, aspect: "aspect-[9/16]" },
  { id: 5, url: img5, aspect: "aspect-square" },
  { id: 6, url: img6, aspect: "aspect-[4/5]" },
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-surface" id="gallery">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24"
        >
          <h2 className="font-headline text-4xl md:text-5xl text-rose-accent mb-4 tracking-wider italic">
            Glimpses of Forever
          </h2>
          <div className="w-8 h-8 mx-auto flex items-center justify-center">
            <div className="w-1 h-1 bg-rose-accent rounded-full"></div>
          </div>
        </motion.div>

        <div className="masonry-grid">
          {localGalleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="masonry-item relative group overflow-hidden border-[0.5px] border-primary/20 p-1 bg-primary/5"
            >
              <div className={`relative overflow-hidden ${item.aspect}`}>
                <img
                  loading="lazy"
                  alt={`Gallery piece ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                  src={item.url}
                />

                {/* Premium hover glass fade */}
                <div className="absolute inset-0 bg-black mix-blend-overlay opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
                <div className="absolute inset-0 glass-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {item.dateLabel && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none flex items-center justify-center">
                    <span className="text-primary/70 font-serif italic text-sm tracking-[0.2em] z-10 drop-shadow-md">
                      {item.dateLabel}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

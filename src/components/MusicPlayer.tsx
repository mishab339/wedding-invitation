/**
 * MusicPlayer Component
 * Floating action button with a pulsing animation.
 */

import React from 'react';
import { motion } from 'framer-motion';

export const MusicPlayer: React.FC = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[200]">
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-surface-container-high/80 backdrop-blur-xl border border-rose-accent/20 flex items-center justify-center group shadow-xl shadow-black/50"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <span className="material-symbols-outlined text-rose-accent group-hover:scale-110 transition-transform">
            music_note
          </span>
          
          {/* Animated Music Bars */}
          <div className="absolute bottom-1 flex gap-0.5">
            {[2, 3, 1.5, 2.5].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: [height * 4, height * 2, height * 4] }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-0.5 bg-rose-accent/40"
              />
            ))}
          </div>
        </div>
      </motion.button>
    </div>
  );
};

export default MusicPlayer;

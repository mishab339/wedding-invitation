/**
 * Navigation Component
 * Sticky top app bar with glassmorphism effect.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/mockData';

export const Navigation: React.FC = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-[100] h-20 bg-zinc-950/60 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 shadow-[0_20px_50px_rgba(227,181,181,0.05)]"
    >
      <div className="text-2xl font-serif tracking-widest rose-gradient">
        {WEDDING_DATA.couple.groom.charAt(0)}{WEDDING_DATA.couple.namesSeparator}{WEDDING_DATA.couple.bride.charAt(0)}
      </div>

      <div className="hidden md:flex gap-12">
        {WEDDING_DATA.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-stone-400 font-serif tracking-[0.05em] uppercase text-sm hover:text-rose-accent transition-all duration-500"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-rose-accent cursor-pointer hover:scale-110 transition-transform">
          music_note
        </span>
        <span className="material-symbols-outlined text-rose-accent md:hidden cursor-pointer">
          menu
        </span>
      </div>
    </motion.nav>
  );
};

export default Navigation;

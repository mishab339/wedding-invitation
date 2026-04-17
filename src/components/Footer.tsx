/**
 * Footer Component
 * Minimalist typographic footer.
 */

import React from 'react';
import { WEDDING_DATA } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-16 pb-32 md:py-20 px-4 md:px-6 border-t border-rose-accent/10 w-full relative">
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        <h2 className="font-headline text-lg sm:text-2xl md:text-3xl text-primary mb-4">With Love</h2>

        <div className="font-headline text-rose-accent mb-8 italic flex flex-col md:flex-row items-center justify-center gap-1 sm:gap-3 md:gap-4 w-full">
          <span
            className="text-center max-w-full px-2 overflow-hidden w-full"
            style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)', wordBreak: 'break-word', hyphens: 'auto' }}
          >
            {WEDDING_DATA.couple.groom}
          </span>
          <span className="text-xl md:text-4xl text-rose-accent/60 font-light">&</span>
          <span
            className="text-center max-w-full px-2 overflow-hidden w-full"
            style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)', wordBreak: 'break-word', hyphens: 'auto' }}
          >
            {WEDDING_DATA.couple.bride}
          </span>
        </div>

        <div className="w-px h-10 sm:h-12 md:h-16 bg-rose-accent/30 mx-auto mb-6 md:mb-8"></div>

        <p
          className="font-label uppercase text-stone-500 mb-8 leading-relaxed px-2 text-center overflow-hidden"
          style={{ fontSize: 'clamp(8px, 2vw, 10px)', letterSpacing: 'clamp(0.1em, 1vw, 0.4em)', wordBreak: 'break-word' }}
        >
          {WEDDING_DATA.footer.tagline}
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-4">
          <a href="#" className="text-stone-600 hover:text-rose-accent transition-colors tracking-widest uppercase w-full sm:w-auto p-2" style={{ fontSize: 'clamp(8px, 2vw, 10px)' }}>Privacy</a>
          <a href="#" className="text-stone-600 hover:text-rose-accent transition-colors tracking-widest uppercase w-full sm:w-auto p-2" style={{ fontSize: 'clamp(8px, 2vw, 10px)' }}>RSVP Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


/**
 * Hero Component
 * Cinematic entrance with parallax-like backdrop and staggered text animations.
 */

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { WEDDING_DATA } from '../data/mockData';

import heroMobileBg from '../assets/IMG-20241214-WA0006.jpg';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <header className="relative -mt-30 md:mt-0 h-screen md:h-[120vh] w-full flex items-end md:items-center justify-center pb-24 md:pb-0 overflow-hidden bg-black">
      {/* Background Image with Overlay (Mobile only) */}
      <div className="absolute inset-0 z-0 md:hidden">
        <motion.img
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          alt="Couple Mobile Background"
          className="w-full h-full object-cover object-[center_15%]"
          src={heroMobileBg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Background Image with Overlay (Desktop only) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          alt="Couple Desktop Background"
          className="w-full h-full object-cover object-[center_40%]"
          src={heroMobileBg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 md:px-8 w-full max-w-6xl mx-auto flex flex-col items-center"
      >
        <motion.p
          variants={itemVariants}
          className="font-headline italic text-rose-accent/80 mb-4 md:mb-6 font-light"
          style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.25rem)', letterSpacing: 'clamp(0.1em, 0.3vw, 0.25em)' }}
        >
          {WEDDING_DATA.couple.togetherWithFamilies}
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="font-headline text-primary mb-6 md:mb-10 w-full text-center flex flex-row flex-wrap items-center justify-center gap-y-2 md:gap-y-0"
          style={{
            fontSize: "clamp(2.5rem, 9vw, 8rem)",
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
          }}
        >
          <span className="inline-block max-w-full break-words pb-1">{WEDDING_DATA.couple.groom}</span>
          <span
            className="inline-block font-normal text-rose-accent/40 mx-3 md:mx-8 px-1"
            style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
          >
            {WEDDING_DATA.couple.namesSeparator}
          </span>
          <span className="inline-block max-w-full break-words pb-1">{WEDDING_DATA.couple.bride}</span>
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="flex flex-row items-center justify-center w-full mb-10 md:mb-14"
          style={{ gap: 'clamp(0.75rem, 4vw, 4rem)' }}
        >
          <div className="flex flex-col items-center min-w-max">
            <span className="text-primary font-headline mb-1" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.5rem)' }}>{WEDDING_DATA.date.month}</span>
            <span className="text-on-surface-variant uppercase font-light" style={{ fontSize: 'clamp(0.5rem, 1vw, 0.75rem)', letterSpacing: 'clamp(0.1em, 0.2vw, 0.3em)' }}>{WEDDING_DATA.date.year}</span>
          </div>
          <div className="bg-rose-accent/30 block rotate-12" style={{ width: 'clamp(1px, 0.1vw, 2px)', height: 'clamp(2rem, 5vw, 3.5rem)' }}></div>
          <div className="flex flex-col items-center min-w-max px-1">
            <span className="text-primary font-headline" style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.5rem)' }}>{WEDDING_DATA.date.day}</span>
          </div>
          <div className="bg-rose-accent/30 block rotate-12" style={{ width: 'clamp(1px, 0.1vw, 2px)', height: 'clamp(2rem, 5vw, 3.5rem)' }}></div>
          <div className="flex flex-col items-center min-w-max">
            <span className="text-primary font-headline mb-1" style={{ fontSize: 'clamp(0.875rem, 2vw, 1.5rem)' }}>{WEDDING_DATA.date.weekday}</span>
            <span className="text-on-surface-variant uppercase font-light" style={{ fontSize: 'clamp(0.5rem, 1vw, 0.75rem)', letterSpacing: 'clamp(0.1em, 0.2vw, 0.3em)' }}>{WEDDING_DATA.date.time}</span>
          </div>
        </motion.div>

        <motion.a
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 md:px-14 md:py-5 bg-gradient-to-br from-primary via-rose-accent to-rose-gold text-on-primary font-bold uppercase shimmer-effect rounded-sm"
          style={{
            fontSize: 'clamp(0.65rem, 1vw, 0.85rem)',
            letterSpacing: 'clamp(0.15em, 0.2vw, 0.25em)'
          }}
          href="#rsvp"
        >
          Open Invitation
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Hero;

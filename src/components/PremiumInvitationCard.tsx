import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { WEDDING_DATA } from '../data/mockData';

interface PremiumInvitationCardProps {
  onClose: () => void;
}

export const PremiumInvitationCard: React.FC<PremiumInvitationCardProps> = ({ onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-xl"
      >
        <button
          onClick={onClose}
          className="absolute top-8 right-8 text-primary/60 hover:text-primary transition-colors p-2"
        >
          <X size={32} strokeWidth={1} />
        </button>

        <motion.div
          initial={{ y: 50, scale: 0.95, opacity: 0 }}
          animate={{ y: 0, scale: 1, opacity: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 100, delay: 0.1 }}
          className="relative max-w-2xl w-full mx-auto bg-surface-container-lowest border-2 border-primary/20 p-8 md:p-16 shadow-2xl overflow-hidden"
        >
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-6 left-6 w-16 h-16 border-t border-l border-rose-accent/40 rounded-tl-3xl opacity-50"></div>
          <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-rose-accent/40 rounded-tr-3xl opacity-50"></div>
          <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-rose-accent/40 rounded-bl-3xl opacity-50"></div>
          <div className="absolute bottom-6 right-6 w-16 h-16 border-b border-r border-rose-accent/40 rounded-br-3xl opacity-50"></div>

          <div className="text-center relative z-10 flex flex-col items-center gap-8">
            <h4 className="text-rose-accent/70 tracking-[0.3em] uppercase text-xs md:text-sm">
              {WEDDING_DATA.couple.togetherWithFamilies}
            </h4>

            <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight py-6">
              {WEDDING_DATA.couple.groom}
              <span className="block text-3xl font-light text-rose-accent/50 italic my-2">and</span>
              {WEDDING_DATA.couple.bride}
            </h1>

            <div className="w-24 h-[1px] bg-primary/20 mx-auto"></div>

            <div className="space-y-4">
              <p className="font-headline text-2xl md:text-3xl text-primary">
                {WEDDING_DATA.date.weekday}, {WEDDING_DATA.date.month} {WEDDING_DATA.date.day}, {WEDDING_DATA.date.year}
              </p>
              <p className="text-on-surface-variant font-light tracking-[0.2em] uppercase text-xs">
                at {WEDDING_DATA.date.time}
              </p>
            </div>

            <div className="space-y-2 mt-4">
              <p className="font-headline text-xl text-primary">
                The Heritage Estate
              </p>
              <p className="text-on-surface-variant tracking-wider text-sm font-light">
                123 Enchanted Valley Road<br />
                Napa Valley, California
              </p>
            </div>

            <div className="mt-8">
              <button
                onClick={onClose}
                className="px-8 py-3 bg-transparent border border-primary text-primary font-bold tracking-[0.2em] uppercase text-[10px] hover:bg-primary hover:text-black transition-all duration-300"
              >
                Close Invitation
              </button>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-rose-accent/5 blur-[100px] rounded-full pointer-events-none"></div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PremiumInvitationCard;

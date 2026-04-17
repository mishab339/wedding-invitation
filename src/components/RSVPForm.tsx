/**
 * RSVPForm Component
 * Premium response section with hover effects and glassmorphism.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { WEDDING_DATA } from '../data/mockData';

export const RSVPForm: React.FC<{ onRevealInvitation?: () => void }> = ({ onRevealInvitation }) => {
  const [rsvpState, setRsvpState] = useState<'initial' | 'attending' | 'declined' | 'submitted'>('initial');
  const [guestCount, setGuestCount] = useState<number>(1);

  const handleIncrement = () => setGuestCount((prev) => Math.min(prev + 1, 10));
  const handleDecrement = () => setGuestCount((prev) => Math.max(prev - 1, 1));

  return (
    <section className="relative py-32 px-6 bg-surface-container-lowest overflow-hidden py-40" id="rsvp">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-accent/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-surface-container-low/40 backdrop-blur-2xl p-12 md:p-20 border border-primary/10 shadow-2xl"
        >
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-primary mb-6 italic">
              Will You Join Us?
            </h2>
            <p className="text-rose-accent/70 font-light tracking-[0.3em] uppercase text-xs">
              Kindly respond by {WEDDING_DATA.date.rsvpDeadline}
            </p>
          </div>

          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="wait">
              {rsvpState === 'initial' && (
                <motion.div
                  key="buttons"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center gap-6 max-w-sm mx-auto"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRsvpState('attending')}
                    className="w-full py-5 bg-gradient-to-br from-primary via-rose-accent to-rose-gold text-on-primary font-bold tracking-[0.2em] uppercase text-xs shadow-lg hover:brightness-110 transition-all duration-500 shimmer-effect"
                    type="button"
                  >
                    Yes, Insha'Allah
                  </motion.button>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setRsvpState('declined')}
                    className="w-full py-5 bg-transparent border border-primary/40 text-primary font-bold tracking-[0.2em] uppercase text-xs hover:bg-primary/5 transition-all duration-500"
                    type="button"
                  >
                    Regretfully Decline
                  </motion.button>
                </motion.div>
              )}

              {rsvpState === 'attending' && (
                <motion.div
                  key="attending-form"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center max-w-sm mx-auto flex flex-col items-center gap-8"
                >
                  <h3 className="font-headline text-2xl md:text-3xl text-primary italic">
                    How many guests in your party?
                  </h3>

                  <div className="flex items-center justify-center gap-8 bg-surface-container-low/50 border border-primary/20 rounded-full px-8 py-4">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="p-2 text-primary/60 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      disabled={guestCount <= 1}
                    >
                      <Minus size={24} strokeWidth={1} />
                    </button>

                    <div className="w-12 text-center text-3xl font-headline text-primary">
                      {guestCount}
                    </div>

                    <button
                      type="button"
                      onClick={handleIncrement}
                      className="p-2 text-primary/60 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                      disabled={guestCount >= 10}
                    >
                      <Plus size={24} strokeWidth={1} />
                    </button>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      // TODO: Supabase database connection for submission goes here
                      setRsvpState('submitted');
                    }}
                    className="w-full py-5 bg-gradient-to-br from-primary via-rose-accent to-rose-gold text-on-primary font-bold tracking-[0.2em] uppercase text-xs shadow-lg hover:brightness-110 transition-all duration-500 shimmer-effect mt-4"
                    type="button"
                  >
                    Confirm Attendance
                  </motion.button>

                  <button
                    onClick={() => setRsvpState('initial')}
                    className="text-xs font-bold tracking-[0.2em] text-primary/50 hover:text-primary uppercase transition-colors duration-300"
                    type="button"
                  >
                    ← Go Back
                  </button>
                </motion.div>
              )}

              {rsvpState === 'submitted' && (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center max-w-md mx-auto flex flex-col items-center gap-6"
                >
                  <h3 className="font-headline text-3xl md:text-3xl text-primary italic">
                    Can't Wait to Celebrate!
                  </h3>
                  <div className="w-12 h-px bg-rose-accent/30 mx-auto"></div>
                  <p className="text-on-surface-variant font-light italic tracking-wide text-sm md:text-base leading-relaxed px-4">
                    Your response has been delightfully received. We have reserved {guestCount} {guestCount === 1 ? 'seat' : 'seats'} in your honor.
                  </p>
                  <button
                    onClick={() => {
                      if (onRevealInvitation) onRevealInvitation();
                    }}
                    className="mt-4 px-10 py-5 bg-gradient-to-br from-primary via-rose-accent to-rose-gold text-on-primary font-bold tracking-[0.2em] uppercase text-xs shadow-lg hover:brightness-110 transition-all duration-500 shimmer-effect"
                    type="button"
                  >
                    View Invitation Card
                  </button>
                  <button
                    onClick={() => { setRsvpState('initial'); setGuestCount(1); }}
                    className="mt-2 text-[10px] font-bold tracking-[0.2em] text-primary/30 hover:text-primary uppercase transition-colors duration-300"
                    type="button"
                  >
                    Reset Form
                  </button>
                </motion.div>
              )}

              {rsvpState === 'declined' && (
                <motion.div
                  key="decline-message"
                  initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center max-w-md mx-auto flex flex-col items-center gap-6"
                >
                  <h3 className="font-headline text-3xl md:text-4xl text-primary">
                    We will miss you!
                  </h3>
                  <div className="w-12 h-px bg-rose-accent/30 mx-auto"></div>
                  <p className="text-on-surface-variant font-light italic tracking-wide text-sm md:text-base leading-relaxed px-4">
                    Thank you for your warm wishes. Though your presence will be missed, we carry your love with us into the night.
                  </p>
                  <button
                    onClick={() => setRsvpState('initial')}
                    className="mt-6 text-xs font-bold tracking-[0.2em] text-primary/50 hover:text-primary uppercase transition-colors duration-300"
                    type="button"
                  >
                    ← Go Back
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPForm;

/**
 * Reception Component
 * Includes event details and a simulated venue map.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { WEDDING_DATA } from '../data/mockData';

export const Reception: React.FC = () => {
  return (
    <>
      <section className="py-32 px-6 bg-surface-container-low" id="events">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.1em" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="font-headline text-4xl text-center text-primary mb-20 tracking-[0.1em] uppercase"
          >
            The Reception
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-surface p-12 md:p-16 border border-rose-accent/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-rose-accent/5 rotate-45 translate-x-16 -translate-y-16"></div>
            <div className="relative z-10 text-center">
              <span className="text-rose-accent text-sm tracking-[0.5em] uppercase mb-10 block font-bold">
                {WEDDING_DATA.reception.date}
              </span>

              <div className="flex flex-col items-center justify-center mb-12">
                <span className="material-symbols-outlined text-rose-accent text-3xl mb-4">schedule</span>
                <h3 className="font-headline text-4xl text-on-surface mb-2">{WEDDING_DATA.reception.time}</h3>
                <p className="text-on-surface-variant font-light tracking-widest uppercase text-xs">
                  {WEDDING_DATA.reception.attire}
                </p>
              </div>

              <div className="h-px w-24 bg-rose-accent/30 mx-auto mb-12"></div>

              <div className="flex flex-col items-center justify-center">
                <span className="material-symbols-outlined text-rose-accent text-3xl mb-4">location_on</span>
                <h3 className="font-headline text-3xl text-on-surface mb-2">
                  {WEDDING_DATA.reception.venue}
                </h3>
                <p className="text-on-surface-variant font-light leading-relaxed">
                  {WEDDING_DATA.reception.address.line1}<br />
                  {WEDDING_DATA.reception.address.line2}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Venue Map */}
      <section className="relative h-[600px] bg-surface-container-lowest overflow-hidden">
        <div className="absolute inset-0 grayscale contrast-125 opacity-30">
          <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
            <img
              alt="Map Location"
              className="w-full h-full object-cover"
              src={WEDDING_DATA.reception.location.mapImage}
            />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-surface/80 backdrop-blur-xl p-12 border border-rose-accent/20 max-w-md text-center pointer-events-auto shadow-2xl"
          >
            <span className="material-symbols-outlined text-rose-accent text-4xl mb-6">location_on</span>
            <h2 className="font-headline text-2xl mb-4 text-on-surface">{WEDDING_DATA.reception.venue}</h2>
            <p className="text-on-surface-variant font-light mb-8 text-sm">
              {WEDDING_DATA.reception.address.line1}, {WEDDING_DATA.reception.address.line2}<br />
              United Kingdom, {WEDDING_DATA.reception.address.zip}
            </p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-rose-accent)", color: "var(--color-on-primary)" }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-3 bg-transparent border border-rose-accent text-rose-accent font-bold tracking-[0.2em] uppercase text-[10px] transition-all duration-300"
            >
              Navigate
            </motion.button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Reception;

import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function BentoItem({ children, className, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-colors hover:bg-slate-800/50 hover:border-emerald-500/50 group",
        className
      )}
    >
      {children}
      <div className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
           style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 0) var(--mouse-y, 0), rgba(52, 211, 153, 0.1), transparent 40%)' }}
      />
    </motion.div>
  );
}
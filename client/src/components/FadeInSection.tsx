// components/FadeInSection.tsx
'use client';

import { motion } from 'framer-motion';

export default function FadeInSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
    >
      {children}
    </motion.div>
  );
}

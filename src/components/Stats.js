import React from 'react';
import { motion } from 'framer-motion';

const statData = [
  { label: 'Lives Impacted', value: '12,400+' },
  { label: 'Clinical Partners', value: '28' },
  { label: 'Patents', value: '6' },
];

export default function Stats(){
  return (
    <section className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {statData.map((s, i) => (
        <motion.div key={s.label} initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i*0.15 }} className="glass p-6 rounded-lg">
          <div className="text-2xl font-bold">{s.value}</div>
          <div className="text-sm text-slate-600 dark:text-slate-900 mt-1">{s.label}</div>
        </motion.div>
      ))}
    </section>
  )
}

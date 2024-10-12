import React from 'react';
import { motion } from 'framer-motion';

const ImpactSection = () => (
  <section className="py-16 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Your Impact with ComicFix
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div 
          className="bg-green-50 p-6 rounded-lg"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Fostering Career Development</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Supporting Skills Development: Your contribution allows participants to build essential technical and professional skills, enhancing their career prospects. This can lead to better job opportunities and long-term economic benefits for individuals and their families.</li>
            <li>Encouraging Self-Sufficiency: With the skills they gain through ComicFix projects, participants can become self-sufficient, finding employment, launching startups, or even becoming contributors to future tech communities.</li>
          </ul>
        </motion.div>

        <motion.div 
          className="bg-green-50 p-6 rounded-lg"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Addressing Global Skills Gaps</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Tackling the Tech Talent Shortage: By contributing to the development of fresh talent, you're directly helping to alleviate the tech industry's talent gap, which has global implications for innovation and economic growth.</li>
            <li>Promoting Digital Literacy: In supporting ComicFix, you're advancing digital literacy and technical education, which are critical in today's rapidly evolving digital landscape.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  </section>
);

export default ImpactSection;
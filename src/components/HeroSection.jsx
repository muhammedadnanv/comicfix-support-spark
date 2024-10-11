import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="bg-blue-600 text-white py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Gain Real-World Experience and Earn Certificates
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        ComicFix offers live projects for freshers and self-taught developers to contribute and grow their skills.
      </motion.p>
      <motion.img 
        src="/hero-image.jpg" 
        alt="ComicFix Live Projects" 
        className="mx-auto object-cover rounded-lg shadow-lg max-w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  </section>
);

export default HeroSection;
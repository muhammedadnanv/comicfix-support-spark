import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="bg-primary-color text-white py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Support the Future of Web Developers with Your Donation!
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Empowering freshers and self-taught developers with live projects—your support creates the tech leaders of tomorrow.
      </motion.p>
      <motion.img 
        src="/hero-image.jpg" 
        alt="ComicFix Mission" 
        className="mx-auto object-cover rounded-lg shadow-lg max-w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </div>
  </section>
);

export default HeroSection;
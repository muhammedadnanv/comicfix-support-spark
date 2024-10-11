import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutSection = () => (
  <section className="py-16 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.h2 
        className="text-3xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About ComicFix
      </motion.h2>
      <motion.p 
        className="text-lg mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        ComicFix offers live projects for freshers and self-taught developers, helping them gain real-world experience and earn certificates, giving them a competitive edge in the tech industry.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Real-world Experience', 'Earn Certificates', 'Competitive Edge'].map((benefit, index) => (
          <motion.div 
            key={index}
            className="flex items-center premium-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          >
            <CheckCircle className="text-accent-color mr-4 premium-icon" />
            <span className="font-semibold">{benefit}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="bg-blue-600 text-white py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Support the Future of Web Development
      </motion.h1>
      <motion.p 
        className="text-xl md:text-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Your donation helps us provide live projects and certifications for aspiring developers.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button className="bg-white text-blue-600 hover:bg-blue-100 text-lg px-8 py-3 rounded-full">
          Donate Now
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
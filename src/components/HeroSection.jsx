import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="bg-black text-golden py-10 md:py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Support the Future of Web Development
      </motion.h1>
      <motion.p 
        className="text-base md:text-lg lg:text-2xl mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Your donation helps us provide live projects, certifications, and now you can even sponsor individual projects!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Button className="bg-golden text-black hover:bg-yellow-400 text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full">
          Donate Now
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
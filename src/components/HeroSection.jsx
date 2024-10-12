import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection = () => (
  <section className="bg-green-100 text-green-800 py-10 md:py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <motion.h1 
        className="text-2xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ComicFix - Where Developers Thrive, Projects Inspire, and Certifications Validate
      </motion.h1>
      <motion.p 
        className="text-base md:text-lg lg:text-xl mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        At ComicFix, supporters play a crucial role in nurturing the next generation of developers, helping them gain valuable skills and experience that will benefit their careers and the broader tech community.
      </motion.p>
      <motion.p 
        className="text-base md:text-lg lg:text-xl mb-6 md:mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Your support is not just an investment in individual projects, but in the broader future of the global tech community.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button className="bg-green-500 text-white hover:bg-green-600 text-base md:text-lg px-6 md:px-8 py-2 md:py-3 rounded-full">
          Support ComicFix <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
import React from 'react';
import { motion } from 'framer-motion';

const ImpactSection = () => (
  <section className="py-16 px-4 md:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            name: "Priya S.",
            role: "Junior Developer",
            quote: "ComicFix's live projects gave me the confidence to land my first tech job!"
          },
          {
            name: "Rahul M.",
            role: "Self-taught Programmer",
            quote: "The experience I gained through ComicFix was invaluable for my career growth."
          }
        ].map((testimonial, index) => (
          <motion.div 
            key={index}
            className="premium-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-lg mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
      <motion.img 
        src="/impact-image.jpg" 
        alt="ComicFix Impact" 
        className="mx-auto object-cover rounded-lg shadow-lg max-w-full h-auto"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  </section>
);

export default ImpactSection;
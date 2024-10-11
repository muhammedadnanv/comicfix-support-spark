import React from 'react';
import { motion } from 'framer-motion';

const DonorRecognition = () => (
  <section className="py-16 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Generous Donors</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "TechCorp Inc.", logo: "/techcorp-logo.png" },
          { name: "InnovateTech", logo: "/innovatetech-logo.png" },
          { name: "FutureDev Foundation", logo: "/futuredev-logo.png" },
        ].map((donor, index) => (
          <motion.div 
            key={index}
            className="text-center premium-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <img src={donor.logo} alt={donor.name} className="mx-auto h-24 w-auto mb-4" />
            <p className="font-semibold">{donor.name}</p>
          </motion.div>
        ))}
      </div>
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p className="text-lg mb-4">Become a ComicFix Supporter and earn your badge!</p>
        <img src="/supporter-badge.png" alt="ComicFix Supporter Badge" className="mx-auto h-32 w-auto" />
      </motion.div>
    </div>
  </section>
);

export default DonorRecognition;
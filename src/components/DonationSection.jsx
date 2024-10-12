import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const DonationSection = () => {
  const donationOptions = [10, 25, 50, 100, 250, 500];

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-900 text-golden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Make a Difference Today
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {donationOptions.map((amount, index) => (
            <motion.div 
              key={amount}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Button 
                className="w-full bg-golden text-black hover:bg-yellow-400"
                onClick={() => {
                  // Implement donation logic here
                  console.log(`Donating $${amount}`);
                }}
              >
                ${amount}
              </Button>
            </motion.div>
          ))}
        </div>
        <motion.p 
          className="text-center text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Your contribution directly supports our mission to empower developers through live projects and certifications.
        </motion.p>
      </div>
    </section>
  );
};

export default DonationSection;
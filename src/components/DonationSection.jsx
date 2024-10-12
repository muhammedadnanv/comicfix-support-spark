import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const DonationSection = () => {
   const donationOptions = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    200, 300, 400, 500, 600, 700, 800, 900, 1000,
    1500, 2000
];


  const handleDonate = (amount) => {
    // Implement UPI payment logic here
    console.log(`Donating ₹${amount}`);
    // You can integrate with a UPI payment gateway here
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-orange-50 text-orange-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Make a Difference Today in India
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
                className="w-full bg-orange-500 text-white hover:bg-orange-600"
                onClick={() => handleDonate(amount)}
              >
                ₹{amount.toLocaleString('en-IN')}
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
          Your contribution directly supports our mission to empower developers through live projects and certifications in India.
        </motion.p>
      </div>
    </section>
  );
};

export default DonationSection;

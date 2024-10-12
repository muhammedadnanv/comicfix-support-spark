import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";

const DonationSection = () => {
  const handleDonate = (amount) => {
    const upiLink = amount
      ? `upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=${amount}.00&cu=INR&tn=Supporting ComicFix Community`
      : `upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&cu=INR&tn=Supporting ComicFix Community`;
    window.location.href = upiLink;
  };

  const donationAmounts = [10, 20, 50, 100, 500, 1000, 5000, 10000, 100000, 1000000, 10000000];

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center text-golden">Make a Difference Today</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 mb-6 md:mb-8">
          {donationAmounts.map((amount, index) => (
            <motion.div 
              key={amount}
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Button 
                onClick={() => handleDonate(amount)} 
                className="w-full bg-golden hover:bg-yellow-400 text-black text-sm md:text-base"
              >
                Donate ₹{amount.toLocaleString()}
              </Button>
            </motion.div>
          ))}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: donationAmounts.length * 0.1 }}
          >
            <Button 
              onClick={() => handleDonate()} 
              className="w-full bg-golden hover:bg-yellow-400 text-black text-sm md:text-base"
            >
              Custom Amount
            </Button>
          </motion.div>
        </div>
        <motion.p 
          className="text-center text-golden text-sm md:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: (donationAmounts.length + 1) * 0.1 }}
        >
          Your contribution directly supports our mission to empower developers through live projects and certifications.
        </motion.p>
      </div>
    </section>
  );
};

export default DonationSection;
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

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Make a Difference Today</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Button onClick={() => handleDonate(500)} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Donate ₹500
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Button onClick={() => handleDonate(1000)} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Donate ₹1000
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Button onClick={() => handleDonate()} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Custom Amount
            </Button>
          </motion.div>
        </div>
        <motion.p 
          className="text-center text-gray-600"
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
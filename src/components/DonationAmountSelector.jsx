import React from 'react';
import { Button } from "@/components/ui/button";

const DonationAmountSelector = ({ onAmountSelect }) => {
  const donationOptions = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    200, 300, 400, 500, 600, 700, 800, 900, 1000,
    1500, 2000
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
      {donationOptions.map((amount, index) => (
        <motion.div 
          key={amount}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <Button 
            className="w-full bg-golden text-black hover:bg-yellow-600"
            onClick={() => onAmountSelect(amount)}
          >
            ₹{amount.toLocaleString('en-IN')}
          </Button>
        </motion.div>
      ))}
    </div>
  );
};

export default DonationAmountSelector;
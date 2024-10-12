import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    phone: '',
    reason: ''
  });

  const donationOptions = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100,
    200, 300, 400, 500, 600, 700, 800, 900, 1000,
    1500, 2000
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleDonate = (e) => {
    e.preventDefault();
    // UPI payment logic
    const upiId = "comicfix@upi"; // Replace with your actual UPI ID
    const paymentUrl = `upi://pay?pa=${upiId}&pn=ComicFix%20Kerala&am=${selectedAmount}&cu=INR&tn=Donation%20to%20ComicFix%20Kerala&tr=${encodeURIComponent(JSON.stringify(donorInfo))}`;
    
    // Open the UPI payment URL
    window.location.href = paymentUrl;
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-green-50 text-green-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Make a Difference Today in Kerala
        </motion.h2>
        {!showForm ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {donationOptions.map((amount, index) => (
              <motion.div 
                key={amount}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Button 
                  className="w-full bg-green-500 text-white hover:bg-green-600"
                  onClick={() => handleAmountSelect(amount)}
                >
                  ₹{amount.toLocaleString('en-IN')}
                </Button>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.form 
            onSubmit={handleDonate}
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={donorInfo.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-green-300 rounded"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={donorInfo.phone}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-green-300 rounded"
            />
            <Textarea
              name="reason"
              placeholder="Why do you support ComicFix Kerala?"
              value={donorInfo.reason}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-green-300 rounded"
            />
            <Button 
              type="submit"
              className="w-full bg-green-500 text-white hover:bg-green-600"
            >
              Donate ₹{selectedAmount.toLocaleString('en-IN')}
            </Button>
          </motion.form>
        )}
        <motion.p 
          className="text-center text-lg mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Your contribution directly supports our mission to empower developers through live projects and certifications in Kerala.
        </motion.p>
      </div>
    </section>
  );
};

export default DonationSection;
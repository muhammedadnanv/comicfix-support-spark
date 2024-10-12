import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    phone: '',
    reason: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    bankName: '',
    accountNumber: '',
    ifscCode: ''
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
    // Implement payment processing logic here based on the selected payment method
    console.log('Processing donation:', { amount: selectedAmount, method: paymentMethod, ...donorInfo });
    // For demonstration purposes, we'll just log the data
    alert('Thank you for your donation! (This is a demo - no actual payment was processed)');
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-golden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Donation Makes a Difference
        </motion.h2>
        <motion.p
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Every contribution, no matter the size, helps us empower developers and shape the future of technology.
        </motion.p>

        <motion.div
          className="bg-gray-900 p-6 rounded-lg shadow-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-golden">Why Should You Donate?</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-golden">Make a Difference:</strong> Your donation directly impacts the lives of aspiring developers by providing them with real-world experiences and certifications that they might not otherwise have access to.</li>
            <li><strong className="text-golden">Contribute to the Tech Industry's Future:</strong> By donating, you're helping to cultivate a new generation of skilled developers who will drive innovation and growth in the tech industry.</li>
            <li><strong className="text-golden">Support Equal Opportunity:</strong> You're promoting equal access to education and career opportunities, helping to create a more diverse and inclusive industry.</li>
          </ul>
          <p className="mt-4">In short, your donation to ComicFix is more than just a financial contribution; it's an investment in the future of tech and social progress.</p>
        </motion.div>

        {!showForm ? (
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
              className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
            />
            <Input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={donorInfo.phone}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
            />
            <Textarea
              name="reason"
              placeholder="Why are you contributing to ComicFix?"
              value={donorInfo.reason}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
            />
            <Select onValueChange={(value) => setPaymentMethod(value)}>
              <SelectTrigger className="w-full bg-gray-800 text-white border-golden">
                <SelectValue placeholder="Select payment method" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 text-white">
                <SelectItem value="upi">UPI</SelectItem>
                <SelectItem value="debit">Debit Card</SelectItem>
                <SelectItem value="bank">Bank Transfer (IFSC)</SelectItem>
              </SelectContent>
            </Select>
            {paymentMethod === 'debit' && (
              <>
                <Input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={donorInfo.cardNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
                />
                <div className="flex space-x-2">
                  <Input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={donorInfo.expiryDate}
                    onChange={handleInputChange}
                    required
                    className="w-1/2 p-2 border border-golden rounded bg-gray-800 text-white"
                  />
                  <Input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={donorInfo.cvv}
                    onChange={handleInputChange}
                    required
                    className="w-1/2 p-2 border border-golden rounded bg-gray-800 text-white"
                  />
                </div>
              </>
            )}
            {paymentMethod === 'bank' && (
              <>
                <Input
                  type="text"
                  name="bankName"
                  placeholder="Bank Name"
                  value={donorInfo.bankName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
                />
                <Input
                  type="text"
                  name="accountNumber"
                  placeholder="Account Number"
                  value={donorInfo.accountNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
                />
                <Input
                  type="text"
                  name="ifscCode"
                  placeholder="IFSC Code"
                  value={donorInfo.ifscCode}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border border-golden rounded bg-gray-800 text-white"
                />
              </>
            )}
            <Button 
              type="submit"
              className="w-full bg-golden text-black hover:bg-yellow-600"
            >
              Contribute ₹{selectedAmount.toLocaleString('en-IN')}
            </Button>
          </motion.form>
        )}
        <motion.p 
          className="text-center text-lg mt-8 text-golden"
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
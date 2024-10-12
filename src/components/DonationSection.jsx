import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DonationAmountSelector from './DonationAmountSelector';
import DonationForm from './DonationForm';
import { processPayment } from '../utils/paymentUtils';

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

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({ ...prev, [name]: value }));
  };

  const handlePaymentMethodChange = (value) => {
    setPaymentMethod(value);
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    try {
      await processPayment(selectedAmount, paymentMethod, donorInfo);
      alert('Thank you for your donation!');
      // Reset form
      setSelectedAmount(null);
      setShowForm(false);
      setPaymentMethod('upi');
      setDonorInfo({
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
    } catch (error) {
      alert('There was an error processing your donation. Please try again.');
    }
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
          <h3 className="text-2xl font-semibold mb-4 text-golden">Addressing Global Skills Gaps</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-golden">Tackling the Tech Talent Shortage:</strong> By donating to the development of fresh talent, you're directly helping to alleviate the tech industry's talent gap, which has global implications for innovation and economic growth.</li>
            <li><strong className="text-golden">Promoting Digital Literacy:</strong> In supporting ComicFix, you're advancing digital literacy and technical education, which are critical in today's rapidly evolving digital landscape.</li>
          </ul>
        </motion.div>

        {!showForm ? (
          <DonationAmountSelector onAmountSelect={handleAmountSelect} />
        ) : (
          <DonationForm
            selectedAmount={selectedAmount}
            donorInfo={donorInfo}
            paymentMethod={paymentMethod}
            onInputChange={handleInputChange}
            onPaymentMethodChange={handlePaymentMethodChange}
            onSubmit={handleDonate}
          />
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
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
    upiId: '',
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
        upiId: '',
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

  const impactSections = [
    {
      title: "Empowering Future Innovators",
      content: "Your donation directly supports aspiring developers, providing them with the resources and mentorship needed to become the next generation of tech innovators."
    },
    {
      title: "Bridging the Digital Divide",
      content: "By contributing to ComicFix, you're helping to provide equal opportunities in tech education, regardless of geographical or socioeconomic barriers."
    },
    {
      title: "Fostering a Global Tech Community",
      content: "Your support helps create a diverse, inclusive global network of developers, promoting collaboration and knowledge sharing across borders."
    },
    {
      title: "Driving Technological Advancements",
      content: "Your donation fuels projects that push the boundaries of technology, potentially leading to breakthroughs that benefit society as a whole."
    },
    {
      title: "Sustainable Skill Development",
      content: "Your contribution ensures continuous learning opportunities, helping developers stay current with rapidly evolving technologies and industry demands."
    }
  ];

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

        {impactSections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-lg shadow-md mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-golden">{section.title}</h3>
            <p className="text-white">{section.content}</p>
          </motion.div>
        ))}

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
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Your contribution directly supports our mission to empower developers through live projects and certifications.
        </motion.p>
      </div>
    </section>
  );
};

export default DonationSection;
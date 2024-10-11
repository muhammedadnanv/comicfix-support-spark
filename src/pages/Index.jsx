import React from 'react';
import HeroSection from '../components/HeroSection';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';
import '../styles/premium.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
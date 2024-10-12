import React from 'react';
import HeroSection from '../components/HeroSection';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <HeroSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
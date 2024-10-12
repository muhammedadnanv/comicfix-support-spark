import React from 'react';
import HeroSection from '../components/HeroSection';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';
import '../styles/IndianTheme.css';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50 text-orange-900">
      <HeroSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
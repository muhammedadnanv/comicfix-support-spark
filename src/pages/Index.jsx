import React from 'react';
import HeroSection from '../components/HeroSection';
import ImpactSection from '../components/ImpactSection';
import DonationSection from '../components/DonationSection';
import Footer from '../components/Footer';
import '../styles/IndianTheme.css';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-orange-50 text-orange-900">
      <HeroSection />
      <ImpactSection />
      <DonationSection />
      <Footer />
    </div>
  );
};

export default Index;
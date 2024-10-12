import React from 'react';
import HeroSection from '../components/HeroSection';
import DonationSection from '../components/DonationSection';
import DeveloperSponsorshipProgram from '../components/DeveloperSponsorshipProgram';
import MentorshipProgram from '../components/MentorshipProgram';
import Footer from '../components/Footer';
import '../styles/premium.css';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <DonationSection />
      <DeveloperSponsorshipProgram />
      <MentorshipProgram />
      <Footer />
    </div>
  );
};

export default Index;
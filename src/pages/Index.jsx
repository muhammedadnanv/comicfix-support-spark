import React from 'react';
import HeroSection from '../components/HeroSection';
import DonationSection from '../components/DonationSection';
import DeveloperSponsorshipProgram from '../components/DeveloperSponsorshipProgram';
import MentorshipProgram from '../components/MentorshipProgram';
import FeedbackForm from '../components/FeedbackForm';
import PortfolioBuilder from '../components/PortfolioBuilder';
import GamificationSystem from '../components/GamificationSystem';
import SkillEndorsementSystem from '../components/SkillEndorsementSystem';
import LiveProjectCollaboration from '../components/LiveProjectCollaboration';
import Footer from '../components/Footer';
import '../styles/premium.css';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <HeroSection />
      <DonationSection />
      <DeveloperSponsorshipProgram />
      <MentorshipProgram />
      <GamificationSystem />
      <SkillEndorsementSystem />
      <LiveProjectCollaboration />
      <div className="py-16 px-4 md:px-8 bg-gray-900">
        <h2 className="text-3xl font-bold mb-8 text-center text-golden">Build Your Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeedbackForm />
          <PortfolioBuilder />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
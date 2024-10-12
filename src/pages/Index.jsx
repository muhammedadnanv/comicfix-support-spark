import React from 'react';
import HeroSection from '../components/HeroSection';
import DonationSection from '../components/DonationSection';
import DeveloperSponsorshipProgram from '../components/DeveloperSponsorshipProgram';
import MentorshipProgram from '../components/MentorshipProgram';
import FeedbackForm from '../components/FeedbackForm';
import PortfolioBuilder from '../components/PortfolioBuilder';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import '../styles/premium.css';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <DonationSection />
      <DeveloperSponsorshipProgram />
      <MentorshipProgram />
      <div className="py-16 px-4 md:px-8 bg-gray-100">
        <h2 className="text-3xl font-bold mb-8 text-center text-black">Build Your Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeedbackForm />
          <PortfolioBuilder />
        </div>
      </div>
      <div className="flex flex-col items-center my-8 bg-black text-white p-6 rounded-lg mx-4">
        <p className="text-center mb-4">
          Our Code of Conduct ensures a respectful and inclusive environment for all contributors.
        </p>
        <Button
          className="bg-golden hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
          onClick={() => window.open('https://github.com/ComicFix-com/.github/blob/ce0c32db1b3384711bfe13c303d91f20fd845dda/README.md', '_blank')}
        >
          Read Our Code of Conduct
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
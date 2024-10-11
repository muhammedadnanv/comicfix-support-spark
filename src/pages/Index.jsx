import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import DonationSection from '../components/DonationSection';
import ImpactSection from '../components/ImpactSection';
import DonorRecognition from '../components/DonorRecognition';
import Footer from '../components/Footer';
import '../styles/premium.css';

const Index = () => {
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <AboutSection />
      <DonationSection progress={progress} />
      <ImpactSection />
      <DonorRecognition />
      <Footer />
    </div>
  );
};

export default Index;
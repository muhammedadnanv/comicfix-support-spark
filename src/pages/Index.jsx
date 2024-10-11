import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import CertificatesSection from '../components/CertificatesSection';
import Footer from '../components/Footer';
import '../styles/premium.css';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <CertificatesSection />
      <Footer />
    </div>
  );
};

export default Index;
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ImpactSection from '../components/ImpactSection';
import DonorRecognition from '../components/DonorRecognition';
import Footer from '../components/Footer';

const Index = () => {
  const [progress, setProgress] = React.useState(65);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(75), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleDonate = (amount) => {
    const upiLink = amount
      ? `upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=${amount}.00&cu=INR&tn=Supporting ComicFix Community`
      : `upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&cu=INR&tn=Supporting ComicFix Community`;
    window.location.href = upiLink;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <AboutSection />
      
      <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Support Our Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Button onClick={() => handleDonate(500)} className="bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
            Donate ₹500 <ArrowRight className="ml-2" />
          </Button>
          <Button onClick={() => handleDonate(1000)} className="bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
            Donate ₹1000 <ArrowRight className="ml-2" />
          </Button>
          <Button onClick={() => handleDonate()} className="bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg">
            Custom Amount <ArrowRight className="ml-2" />
          </Button>
        </div>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Donation Progress</h3>
          <Progress value={progress} className="w-full h-4" />
          <p className="text-right mt-2">{progress}% of our goal reached</p>
        </div>
      </section>

      <ImpactSection />
      <DonorRecognition />
      <Footer />
    </div>
  );
};

export default Index;
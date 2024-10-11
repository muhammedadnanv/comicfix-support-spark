import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const DonationSection = ({ progress }) => {
  const handleDonate = (amount) => {
    const upiLink = amount
      ? `upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=${amount}.00&cu=INR&tn=Supporting ComicFix Community`
      : `upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&cu=INR&tn=Supporting ComicFix Community`;
    window.location.href = upiLink;
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Support Our Mission</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Button onClick={() => handleDonate(500)} className="premium-button">
          Donate ₹500 <ArrowRight className="ml-2 premium-icon" />
        </Button>
        <Button onClick={() => handleDonate(1000)} className="premium-button">
          Donate ₹1000 <ArrowRight className="ml-2 premium-icon" />
        </Button>
        <Button onClick={() => handleDonate()} className="premium-button">
          Custom Amount <ArrowRight className="ml-2 premium-icon" />
        </Button>
      </div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Donation Progress</h3>
        <Progress value={progress} className="premium-progress" />
        <p className="text-right mt-2">{progress}% of our goal reached</p>
      </div>
    </section>
  );
};

export default DonationSection;
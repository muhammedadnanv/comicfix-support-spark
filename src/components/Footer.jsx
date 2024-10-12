import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-black text-golden py-8 md:py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">ComicFix</h3>
        <p className="mb-3 md:mb-4 text-sm md:text-base">Empowering the next generation of web developers through your generous support.</p>
        <p className="text-xs md:text-sm mb-6">Your donations help us provide live projects and certifications to aspiring developers.</p>
        <Button
          className="bg-golden hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
          onClick={() => window.open('https://github.com/ComicFix-com/.github/blob/ce0c32db1b3384711bfe13c303d91f20fd845dda/README.md', '_blank')}
        >
          Code of Conduct
        </Button>
      </div>
      <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-golden text-center">
        <p className="text-sm md:text-base">&copy; 2024-25 ComicFix. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
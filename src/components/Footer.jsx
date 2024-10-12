import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 md:py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 golden-text">ComicFix</h3>
        <p className="mb-3 md:mb-4 text-sm md:text-base">Empowering the next generation of web developers through your generous support.</p>
        <p className="text-xs md:text-sm mb-6">Your donations help us provide live projects and certifications to aspiring developers.</p>
        <div className="bg-gray-800 text-white p-4 rounded-lg mb-6">
          <p className="mb-4">We are committed to maintaining a welcoming and inclusive community.</p>
          <Button
            className="bg-[#FFD700] hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded"
            onClick={() => window.open('https://github.com/ComicFix-com/.github/blob/ce0c32db1b3384711bfe13c303d91f20fd845dda/README.md', '_blank')}
          >
            View Code of Conduct
          </Button>
        </div>
      </div>
      <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700 text-center">
        <p className="text-sm md:text-base">&copy; 2024-25 ComicFix. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
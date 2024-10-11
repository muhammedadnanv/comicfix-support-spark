import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Index = () => {
  const [progress, setProgress] = useState(65);

  useEffect(() => {
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
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Support the Future of Web Developers with Your Donation!
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Empowering freshers and self-taught developers with live projects—your support creates the tech leaders of tomorrow.
          </motion.p>
          <motion.img 
            src="/hero-image.jpg" 
            alt="ComicFix Mission" 
            className="mx-auto object-cover rounded-lg shadow-lg max-w-full h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About ComicFix
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            ComicFix offers live projects for freshers and self-taught developers, helping them gain real-world experience and earn certificates, giving them a competitive edge in the tech industry.
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Real-world Experience', 'Earn Certificates', 'Competitive Edge'].map((benefit, index) => (
              <motion.div 
                key={index}
                className="flex items-center bg-blue-50 p-4 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              >
                <CheckCircle className="text-green-500 mr-4" />
                <span className="font-semibold">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Section */}
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

      {/* Impact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Priya S.",
                role: "Junior Developer",
                quote: "ComicFix's live projects gave me the confidence to land my first tech job!"
              },
              {
                name: "Rahul M.",
                role: "Self-taught Programmer",
                quote: "The experience I gained through ComicFix was invaluable for my career growth."
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
          <motion.img 
            src="/impact-image.jpg" 
            alt="ComicFix Impact" 
            className="mx-auto object-cover rounded-lg shadow-lg max-w-full h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </section>

      {/* Donor Recognition Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Generous Donors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "TechCorp Inc.", logo: "/techcorp-logo.png" },
              { name: "InnovateTech", logo: "/innovatetech-logo.png" },
              { name: "FutureDev Foundation", logo: "/futuredev-logo.png" },
            ].map((donor, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img src={donor.logo} alt={donor.name} className="mx-auto h-24 w-auto mb-4" />
                <p className="font-semibold">{donor.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="text-lg mb-4">Become a ComicFix Supporter and earn your badge!</p>
            <img src="/supporter-badge.png" alt="ComicFix Supporter Badge" className="mx-auto h-32 w-auto" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">ComicFix</h3>
              <p>Empowering the next generation of web developers.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-300">About Us</a></li>
                <li><a href="#" className="hover:text-blue-300">Live Projects</a></li>
                <li><a href="#" className="hover:text-blue-300">Success Stories</a></li>
                <li><a href="#" className="hover:text-blue-300">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>Email: info@comicfix.com</p>
              <p>Phone: +1 (123) 456-7890</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-300"><Facebook /></a>
                <a href="#" className="hover:text-blue-300"><Twitter /></a>
                <a href="#" className="hover:text-blue-300"><Instagram /></a>
                <a href="#" className="hover:text-blue-300"><Linkedin /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 ComicFix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
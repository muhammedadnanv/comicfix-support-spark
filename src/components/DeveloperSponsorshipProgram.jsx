import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

const DeveloperSponsorshipProgram = () => {
  const [selectedProject, setSelectedProject] = useState('');
  const [sponsorshipAmount, setSponsorshipAmount] = useState('');

  const projects = [
    "ComicFix-com/Corn.ai",
    "ComicFix-com/AI-tools-for-you",
    "ComicFix-com/FinSage",
    "ComicFix-com/UniW",
    "ComicFix-com/ZoXach",
    "ComicFix-com/Widgets",
    "ComicFix-com/DevVortex-Premium",
    "ComicFix-com/Neighborhoodlively",
    "ComicFix-com/tonx",
    "ComicFix-com/mathrangers"
  ];

  const handleSponsor = () => {
    if (!selectedProject || !sponsorshipAmount) {
      toast.error("Please select a project and enter a sponsorship amount.");
      return;
    }

    const amount = parseFloat(sponsorshipAmount);
    if (isNaN(amount) || amount <= 0) {
      toast.error("Please enter a valid sponsorship amount.");
      return;
    }

    const upiLink = `upi://pay?pa=adnanmuhammad4393@okicici&pn=Adnan%20Muhammad&am=${amount.toFixed(2)}&cu=INR&tn=Supporting ComicFix Community - ${selectedProject}`;
    window.location.href = upiLink;
  };

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-black text-golden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6 text-center text-golden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Project Sponsorship Program
        </motion.h2>
        <motion.p 
          className="text-center mb-8 text-golden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Support a specific project from ComicFix and receive personalized updates on its progress.
        </motion.p>
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Select onValueChange={setSelectedProject}>
            <SelectTrigger className="w-full bg-black text-golden border-golden">
              <SelectValue placeholder="Select a project to sponsor" />
            </SelectTrigger>
            <SelectContent className="bg-black text-golden border-golden">
              {projects.map((project) => (
                <SelectItem key={project} value={project} className="hover:bg-golden hover:text-black">
                  {project}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            type="number"
            placeholder="Sponsorship amount (₹)"
            value={sponsorshipAmount}
            onChange={(e) => setSponsorshipAmount(e.target.value)}
            className="bg-black text-golden border-golden placeholder-golden"
          />
          <Button 
            onClick={handleSponsor}
            className="w-full bg-golden text-black hover:bg-yellow-400"
          >
            Sponsor Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperSponsorshipProgram;
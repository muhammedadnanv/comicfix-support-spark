import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const DeveloperSponsorshipProgram = () => {
  const [selectedDeveloper, setSelectedDeveloper] = useState('');
  const [sponsorshipAmount, setSponsorshipAmount] = useState('');

  const developers = [
    { id: 1, name: 'Alice Johnson', project: 'E-commerce Platform' },
    { id: 2, name: 'Bob Smith', project: 'Task Management App' },
    { id: 3, name: 'Charlie Brown', project: 'Social Media Dashboard' },
  ];

  const handleSponsor = () => {
    // TODO: Implement sponsorship logic
    console.log(`Sponsoring ${selectedDeveloper} with $${sponsorshipAmount}`);
    // Here you would typically send this data to your backend
  };

  return (
    <section className="py-10 md:py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Developer Sponsorship Program
        </motion.h2>
        <motion.p 
          className="text-center mb-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Support a specific developer or project and receive personalized updates on their progress.
        </motion.p>
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Select
            value={selectedDeveloper}
            onValueChange={setSelectedDeveloper}
            placeholder="Select a developer to sponsor"
          >
            {developers.map((dev) => (
              <Select.Option key={dev.id} value={dev.name}>
                {dev.name} - {dev.project}
              </Select.Option>
            ))}
          </Select>
          <Input
            type="number"
            placeholder="Sponsorship amount ($)"
            value={sponsorshipAmount}
            onChange={(e) => setSponsorshipAmount(e.target.value)}
          />
          <Button 
            onClick={handleSponsor}
            className="w-full bg-golden text-black hover:bg-yellow-400"
          >
            Sponsor Developer
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DeveloperSponsorshipProgram;
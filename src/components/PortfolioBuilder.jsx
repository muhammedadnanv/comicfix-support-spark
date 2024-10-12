import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const PortfolioBuilder = () => {
  const [githubUsername, setGithubUsername] = useState('');
  const [template, setTemplate] = useState('');
  const [customDomain, setCustomDomain] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the portfolio data to your backend
    console.log('Portfolio data:', { githubUsername, template, customDomain });
    toast.success("Your portfolio is being generated!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-golden p-6 rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">Build Your Developer Portfolio</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="github" className="block text-sm font-medium mb-1">GitHub Username</label>
          <Input
            type="text"
            id="github"
            value={githubUsername}
            onChange={(e) => setGithubUsername(e.target.value)}
            className="w-full bg-gray-800 text-golden border-golden"
            required
          />
        </div>
        <div>
          <label htmlFor="template" className="block text-sm font-medium mb-1">Choose Template</label>
          <Select onValueChange={setTemplate}>
            <SelectTrigger className="w-full bg-gray-800 text-golden border-golden">
              <SelectValue placeholder="Select a template" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="modern">Modern</SelectItem>
              <SelectItem value="classic">Classic</SelectItem>
              <SelectItem value="minimalist">Minimalist</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <label htmlFor="domain" className="block text-sm font-medium mb-1">Custom Domain (Premium)</label>
          <Input
            type="text"
            id="domain"
            value={customDomain}
            onChange={(e) => setCustomDomain(e.target.value)}
            className="w-full bg-gray-800 text-golden border-golden"
            placeholder="yourdomain.com"
          />
        </div>
        <Button type="submit" className="w-full bg-golden text-black hover:bg-yellow-600">
          Generate Portfolio
        </Button>
      </form>
    </motion.div>
  );
};

export default PortfolioBuilder;
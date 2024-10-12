import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the feedback to your backend
    console.log('Feedback submitted:', { feedback, email });
    toast.success("Thank you for your feedback!");
    setFeedback('');
    setEmail('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-golden p-6 rounded-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">We Value Your Feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email (optional)</label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-800 text-golden border-golden"
          />
        </div>
        <div>
          <label htmlFor="feedback" className="block text-sm font-medium mb-1">Your Feedback</label>
          <Textarea
            id="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            rows={4}
            className="w-full bg-gray-800 text-golden border-golden"
            required
          />
        </div>
        <Button type="submit" className="w-full bg-golden text-black hover:bg-yellow-600">
          Submit Feedback
        </Button>
      </form>
    </motion.div>
  );
};

export default FeedbackForm;
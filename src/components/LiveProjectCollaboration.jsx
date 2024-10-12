import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useQuery } from '@tanstack/react-query';

const LiveProjectCollaboration = () => {
  const [code, setCode] = useState('');
  const [reviewResult, setReviewResult] = useState(null);

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const performAICodeReview = async (codeToReview) => {
    // Simulating an API call to an AI code review service
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
      suggestions: [
        "Consider using const for variables that are not reassigned.",
        "Add error handling for potential exceptions in asynchronous operations.",
        "Optimize the loop on line 15 for better performance."
      ],
      qualityScore: 85
    };
  };

  const { refetch: reviewCode, isFetching } = useQuery({
    queryKey: ['codeReview'],
    queryFn: () => performAICodeReview(code),
    enabled: false,
    onSuccess: (data) => {
      setReviewResult(data);
      if (data.qualityScore > 90) {
        toast.success("Excellent code quality! You've earned the 'Code Master' badge!");
      } else {
        toast.success("Code review completed. Check out the suggestions!");
      }
    },
    onError: () => {
      toast.error("Failed to perform code review. Please try again.");
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-black text-golden p-6 rounded-lg max-w-4xl mx-auto my-8"
    >
      <h2 className="text-2xl font-bold mb-4">Live Project Collaboration</h2>
      <p className="mb-4">Submit your code for AI-powered review and get instant feedback!</p>
      
      <Textarea
        value={code}
        onChange={handleCodeChange}
        placeholder="Paste your code here..."
        className="w-full h-64 mb-4 bg-gray-800 text-golden border-golden"
      />
      
      <Button 
        onClick={() => reviewCode()} 
        disabled={isFetching || !code.trim()} 
        className="bg-golden text-black hover:bg-yellow-600 mb-4"
      >
        {isFetching ? "Reviewing..." : "Submit for Review"}
      </Button>

      {reviewResult && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Review Results</h3>
          <p className="mb-2">Quality Score: {reviewResult.qualityScore}/100</p>
          <h4 className="font-semibold mb-2">Suggestions:</h4>
          <ul className="list-disc pl-5">
            {reviewResult.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default LiveProjectCollaboration;
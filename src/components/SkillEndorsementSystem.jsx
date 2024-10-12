import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const SkillEndorsementSystem = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [mentorBadges, setMentorBadges] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch user's skills and mentor badges
    const fetchUserData = async () => {
      try {
        // In a real app, this would be an API call
        const response = await new Promise(resolve => setTimeout(() => resolve({
          data: {
            skills: [
              { name: 'JavaScript', endorsements: 15 },
              { name: 'React', endorsements: 10 },
              { name: 'Node.js', endorsements: 8 },
            ],
            mentorBadges: ['Beginner Mentor', 'Code Reviewer']
          }
        }), 1000));
        setSkills(response.data.skills);
        setMentorBadges(response.data.mentorBadges);
      } catch (error) {
        console.error('Error fetching user data:', error);
        toast.error('Failed to load user data');
      }
    };

    fetchUserData();
  }, []);

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, { name: newSkill, endorsements: 0 }]);
      setNewSkill('');
      toast.success('New skill added successfully!');
    }
  };

  const handleEndorse = (skillName) => {
    setSkills(skills.map(skill => 
      skill.name === skillName 
        ? { ...skill, endorsements: skill.endorsements + 1 }
        : skill
    ));
    toast.success(`You've endorsed ${skillName}!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-black text-golden p-6 rounded-lg shadow-lg max-w-md mx-auto my-8"
    >
      <h2 className="text-2xl font-bold mb-4">Skill Endorsements & Mentorship</h2>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Your Skills</h3>
        <div className="space-y-2">
          {skills.map((skill, index) => (
            <div key={index} className="flex justify-between items-center">
              <span>{skill.name}</span>
              <div>
                <Badge variant="secondary" className="mr-2">
                  {skill.endorsements} endorsements
                </Badge>
                <Button 
                  size="sm" 
                  onClick={() => handleEndorse(skill.name)}
                  className="bg-golden text-black hover:bg-yellow-600"
                >
                  Endorse
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="newSkill">Add a new skill</Label>
        <div className="flex mt-1">
          <Input
            id="newSkill"
            type="text"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="mr-2 bg-gray-800 text-golden border-golden"
          />
          <Button onClick={handleAddSkill} className="bg-golden text-black hover:bg-yellow-600">
            Add
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Mentor Badges</h3>
        <div className="flex flex-wrap gap-2">
          {mentorBadges.map((badge, index) => (
            <Badge key={index} variant="outline" className="text-golden border-golden">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillEndorsementSystem;
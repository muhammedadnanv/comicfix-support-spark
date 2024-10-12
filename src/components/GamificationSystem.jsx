import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "sonner";
import Badge from './Badge';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const GamificationSystem = () => {
  const [contributors, setContributors] = useState([]);
  const [userLevel, setUserLevel] = useState("Pro Developer");
  const [userPoints, setUserPoints] = useState(7500);
  const [nextLevel, setNextLevel] = useState("Code Master");
  const [pointsToNextLevel, setPointsToNextLevel] = useState(10000);
  const [reputation, setReputation] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [badges, setBadges] = useState([]);
  const [whatsappNumber, setWhatsappNumber] = useState('');

  const organizationMembers = [
    { name: "Abhinandhks", username: "abhinandhks123", role: "Member" },
    { name: "Muhammed ALi", username: "adilali097", role: "Owner" },
    { name: "S Aditya", username: "aditya5885", role: "Member" },
    { name: "Delin.dev", username: "DELINSHABU", role: "Member" },
    { name: "Muhammed Faahad", username: "fahadmuhammed123", role: "Member" },
    { name: "Muhammed Adnan", username: "muhammedadnanv", role: "Member" },
    { name: "Rijo Sebastian", username: "RijoKsd", role: "Member" },
    { name: "Riswan.P.R", username: "RiswanPR", role: "Member" },
    { name: "Rithas", username: "rithasahmed12", role: "Member" },
    { name: "RIYAN SAFFEEKH K M", username: "riyan-hx", role: "Member" },
    { name: "Ajinvr", username: "Ajinvr", role: "Owner" }
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const contributorsData = organizationMembers.map((member, index) => ({
          rank: index + 1,
          name: member.name,
          username: member.username,
          points: Math.floor(Math.random() * 10000) + 1000,
          avatar: `https://github.com/${member.username}.png`,
          role: member.role
        }));

        // Simulate fetching badges
        const fetchedBadges = [
          { name: "First Contribution", icon: "🌟" },
          { name: "Project Master", icon: "🏆" },
          { name: "Mentor Extraordinaire", icon: "🎓" },
        ];

        setContributors(contributorsData);
        setReputation(75); // Simulated reputation score
        setBadges(fetchedBadges);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
        setLoading(false);
        toast.error('Failed to load gamification data');
      }
    };

    fetchData();
  }, []);

  const handleWhatsAppIntegration = () => {
    if (whatsappNumber) {
      // Here you would typically integrate with a WhatsApp API
      toast.success(`WhatsApp integration set up for ${whatsappNumber}`);
      // Reset the input field
      setWhatsappNumber('');
    } else {
      toast.error('Please enter a valid WhatsApp number');
    }
  };

  if (loading) {
    return <div className="p-4">Loading gamification data...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-500">{error}</div>;
  }

  return (
    <section className="py-16 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center text-golden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Developer Journey
        </motion.h2>

        <motion.div 
          className="mb-8 bg-gray-900 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2 text-golden">Current Level: {userLevel}</h3>
          <Progress value={(userPoints / pointsToNextLevel) * 100} className="mb-2" />
          <p className="text-golden">{userPoints} / {pointsToNextLevel} points to {nextLevel}</p>
        </motion.div>

        <motion.div 
          className="mb-8 bg-gray-900 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-golden">Badges Earned</h3>
          <div className="flex flex-wrap gap-4">
            {badges.map((badge, index) => (
              <Badge key={index} icon={badge.icon} name={badge.name} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-8 bg-gray-900 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-golden">Community Reputation</h3>
          <Progress value={reputation} max={100} className="mb-2" />
          <p className="text-golden">Reputation: {reputation}/100</p>
        </motion.div>

        <motion.div
          className="mb-8 bg-gray-900 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-golden">WhatsApp Integration</h3>
          <div className="flex space-x-2">
            <Input
              type="text"
              placeholder="Enter WhatsApp number"
              value={whatsappNumber}
              onChange={(e) => setWhatsappNumber(e.target.value)}
              className="bg-black text-golden border-golden"
            />
            <Button onClick={handleWhatsAppIntegration} className="bg-golden text-black hover:bg-yellow-600">
              Connect WhatsApp
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="bg-gray-900 p-6 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-golden">Top Contributors</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] text-golden">Rank</TableHead>
                <TableHead className="text-golden">Contributor</TableHead>
                <TableHead className="text-right text-golden">Points</TableHead>
                <TableHead className="text-right text-golden">Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contributors.map((contributor) => (
                <TableRow key={contributor.rank}>
                  <TableCell className="font-medium text-golden">{contributor.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <img src={contributor.avatar} alt={contributor.name} className="w-8 h-8 rounded-full mr-2" />
                      <span className="text-golden">{contributor.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right text-golden">{contributor.points}</TableCell>
                  <TableCell className="text-right text-golden">{contributor.role}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </section>
  );
};

export default GamificationSystem;
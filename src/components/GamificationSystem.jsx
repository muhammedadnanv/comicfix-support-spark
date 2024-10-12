import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const GamificationSystem = () => {
  const [contributors, setContributors] = useState([]);
  const userLevel = "Pro Developer";
  const userPoints = 7500;
  const nextLevel = "Code Master";
  const pointsToNextLevel = 10000;

  const badges = [
    { name: "First Contribution", icon: "🌟" },
    { name: "Project Master", icon: "🏆" },
    { name: "Mentor Extraordinaire", icon: "🎓" },
  ];

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get('https://api.github.com/orgs/ComicFix-com/members');
        const contributorsData = response.data.map((contributor, index) => ({
          rank: index + 1,
          name: contributor.login,
          points: Math.floor(Math.random() * 10000) + 1000, // Random points for demonstration
          avatar: contributor.avatar_url,
        }));
        setContributors(contributorsData);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };

    fetchContributors();
  }, []);

  return (
    <section className="py-16 px-4 md:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Developer Journey
        </motion.h2>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-2">Current Level: {userLevel}</h3>
          <Progress value={(userPoints / pointsToNextLevel) * 100} className="mb-2" />
          <p>{userPoints} / {pointsToNextLevel} points to {nextLevel}</p>
        </motion.div>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4">Badges Earned</h3>
          <div className="flex flex-wrap gap-4">
            {badges.map((badge, index) => (
              <Badge key={index} variant="outline" className="text-lg p-2">
                {badge.icon} {badge.name}
              </Badge>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4">Top Contributors</h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Rank</TableHead>
                <TableHead>Contributor</TableHead>
                <TableHead className="text-right">Points</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contributors.map((contributor) => (
                <TableRow key={contributor.rank}>
                  <TableCell className="font-medium">{contributor.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <img src={contributor.avatar} alt={contributor.name} className="w-8 h-8 rounded-full mr-2" />
                      {contributor.name}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{contributor.points}</TableCell>
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
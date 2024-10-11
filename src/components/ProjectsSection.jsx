import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const ProjectsSection = () => (
  <section className="py-16 px-4 md:px-8 bg-gray-50">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Live Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { name: "E-commerce Platform", tech: "React, Node.js" },
          { name: "Task Management App", tech: "Vue.js, Express" },
          { name: "Social Media Dashboard", tech: "Angular, Firebase" },
        ].map((project, index) => (
          <motion.div 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="text-gray-600 mb-4">Technologies: {project.tech}</p>
            <Button className="premium-button">
              Contribute <ArrowRight className="ml-2 premium-icon" />
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
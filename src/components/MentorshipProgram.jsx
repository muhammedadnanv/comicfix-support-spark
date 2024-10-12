import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const MentorshipProgram = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    expertise: '',
    motivation: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send this data to your backend
    console.log('Mentor application submitted:', formData);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      experience: '',
      expertise: '',
      motivation: ''
    });
    alert('Thank you for applying to be a mentor! We will review your application and get back to you soon.');
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-black text-golden">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mentorship Program
        </motion.h2>
        <motion.p 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Share your expertise and guide the next generation of developers. Apply to become a mentor today!
        </motion.p>
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="experience">Years of Experience</Label>
            <Input type="number" id="experience" name="experience" value={formData.experience} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="expertise">Areas of Expertise</Label>
            <Input type="text" id="expertise" name="expertise" value={formData.expertise} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="motivation">Why do you want to be a mentor?</Label>
            <Textarea id="motivation" name="motivation" value={formData.motivation} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <Button type="submit" className="w-full bg-golden hover:bg-yellow-600 text-black">Apply to be a Mentor</Button>
        </motion.form>
      </div>
    </section>
  );
};

export default MentorshipProgram;
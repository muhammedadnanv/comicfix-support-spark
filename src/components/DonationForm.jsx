import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const DonationForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    whatsappNumber: '',
    linkedin: '',
    screenshot: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `New Donation:
Name: ${formData.name}
Address: ${formData.address}
Phone: ${formData.phoneNumber}
WhatsApp: ${formData.whatsappNumber}
LinkedIn: ${formData.linkedin}`;

    const whatsappUrl = `https://wa.me/919656778508?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
    >
      <div className="bg-black border border-golden p-6 rounded-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-golden">Donation Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-golden">Name</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="address" className="text-golden">Address</Label>
            <Input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="phoneNumber" className="text-golden">Phone Number</Label>
            <Input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="whatsappNumber" className="text-golden">WhatsApp Number</Label>
            <Input type="tel" id="whatsappNumber" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleChange} required className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="linkedin" className="text-golden">LinkedIn (optional)</Label>
            <Input type="url" id="linkedin" name="linkedin" value={formData.linkedin} onChange={handleChange} className="bg-black text-golden border-golden" />
          </div>
          <div>
            <Label htmlFor="screenshot" className="text-golden">Upload Donation Screenshot</Label>
            <Input type="file" id="screenshot" name="screenshot" onChange={handleChange} required className="bg-black text-golden border-golden" accept="image/*" />
          </div>
          <div className="flex justify-end space-x-4">
            <Button type="button" onClick={onClose} className="bg-gray-600 hover:bg-gray-700 text-white">Cancel</Button>
            <Button type="submit" className="bg-golden hover:bg-yellow-600 text-black">Submit</Button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default DonationForm;
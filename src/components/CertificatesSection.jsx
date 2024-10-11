import React from 'react';
import { motion } from 'framer-motion';

const CertificatesSection = () => (
  <section className="py-16 px-4 md:px-8 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Earn Certificates</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          { name: "Web Development Proficiency", description: "Awarded for completing front-end and back-end projects" },
          { name: "Database Management Expert", description: "Earned through contributions to database-focused projects" },
        ].map((certificate, index) => (
          <motion.div 
            key={index}
            className="bg-blue-50 p-6 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{certificate.name}</h3>
            <p className="text-gray-600">{certificate.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
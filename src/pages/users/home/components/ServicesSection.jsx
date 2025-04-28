import React from 'react';
import MyServices from '../../components/myServices/MyServices';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <div className="bg-gray-900 py-20 px-6 flex flex-col items-center font-outfit">
  
  {/* Explore Now */}
  <motion.h1
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-white text-4xl sm:text-5xl font-extrabold mb-12 text-center tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
  >
    Explore Now
  </motion.h1>

  {/* الكومبوننت بتاع الخدمات */}
  <MyServices />

</div>

  );
};

export default ServicesSection;

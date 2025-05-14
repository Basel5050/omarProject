import React from 'react';
import MyServices from '../../components/myServices/MyServices';
import { motion } from 'framer-motion';

const ServicesSection = () => {
  return (
    <div className="bg-black py-20 px-6 flex flex-col items-center font-outfit text-center">
      
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-white text-4xl sm:text-5xl font-extrabold mb-8 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.15)]"
      >
       What I<span className="text-gradient bg-gradient-to-r  from-white to-cyan-900 bg-clip-text text-transparent">Do</span>  ?
      </motion.h1>

      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-gray-300 max-w-3xl text-sm sm:text-base md:text-lg mb-12 leading-relaxed"
      >
        I am a professional video editor and motion designer, dedicated to crafting visually striking stories with a blend of creativity and precision. Every cut, transition, and animation is thoughtfully executed to deliver impactful and memorable content. I look forward to collaborating with you to create outstanding work that captures attention and leaves a lasting impression.
      </motion.p>

      
      <MyServices />
    </div>
  );
};

export default ServicesSection;


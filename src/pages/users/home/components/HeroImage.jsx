// HeroImage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const HeroImage = () => {
  return (
    <div className="relative w-full h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center p-6">
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        scale={1.02}
        transitionSpeed={2500}
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        className="hidden lg:block w-[80%] h-auto"
      >
        <motion.img
          src="/omarA.png"
          alt="Omar"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="object-cover rounded-lg shadow-xl"
        />
      </Tilt>
    </div>
  );
};

export default HeroImage;

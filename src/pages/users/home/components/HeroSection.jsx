import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="h-screen bg-gray-900 flex flex-col-reverse lg:flex-row items-center justify-center px-6 relative overflow-hidden font-outfit">
      
      {/* Text Content */}
      <div className="z-10 text-center lg:text-left max-w-lg">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          Hi, I'm Omar<br />
          Video Editor & Motion Designer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-white text-xs sm:text-sm md:text-base mt-4"
        >
          I create dynamic and engaging videos that tell your story in the most creative way.
        </motion.p>

        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="mt-6 inline-block px-8 py-3 bg-white text-gray-900 font-bold rounded-full text-sm sm:text-base shadow-md hover:scale-105 hover:bg-gray-200 transition-all duration-300"
        >
          Contact Me
        </motion.a>
      </div>

      {/* Image */}
      <div className="relative w-full h-1/2 lg:h-full lg:w-1/2">
        {/* الصورة في الكمبيوتر */}
        <img
          src="/omar.jpg"
          alt="Omar"
          className="hidden lg:block object-cover w-full h-full rounded-lg shadow-lg"
        />

        {/* الصورة كخلفية للموبايل */}
        <div
          className="absolute inset-0 lg:hidden bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/omar.jpg')" }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;

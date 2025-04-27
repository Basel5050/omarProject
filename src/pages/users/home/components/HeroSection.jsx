import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaWhatsapp } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gray-900 flex flex-col-reverse lg:flex-row items-center justify-center font-outfit overflow-hidden">
      
      {/* Background Image for Mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 lg:hidden"
        style={{ backgroundImage: "url('/omar.jpg')" }}
      ></div>

      {/* Dark overlay for better text readability on mobile */}
      <div className="absolute inset-0 bg-black/50 lg:hidden"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl px-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left lg:w-1/2">
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Hi, I'm <span className="text-gray-400">Omar Abdelaziz</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white text-sm sm:text-base md:text-lg mb-8"
        >
          Professional Video Editor & Motion Graphic Designer
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="/contact" className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full text-sm sm:text-base shadow-md hover:scale-105 hover:bg-gray-200 transition-all duration-300">
            Contact Me
          </a>
          <a href="/showreel" className="px-8 py-3 border border-white text-white font-bold rounded-full text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300">
            Watch Showreel
          </a>
        </motion.div>
      </div>

      {/* Hero Image - Desktop Only */}
      <div className="relative w-full h-1/2 lg:h-full lg:w-1/2 hidden lg:flex items-center justify-center p-6">
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.1}
          scale={1.02}
          transitionSpeed={2500}
          tiltMaxAngleX={8}
          tiltMaxAngleY={8}
          className="w-[80%] h-auto"
        >
          <motion.img
            src="/omar.jpg"
            alt="Omar"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="object-cover rounded-lg shadow-xl"
          />
        </Tilt>
      </div>

      {/* Scroll Down Icon */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 animate-bounce z-10"
      >
        <a href="#aboutme">
          <svg className="w-6 h-6 text-white mx-auto" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </motion.div>

      {/* Social Media Icons */}
      <div className="absolute left-5 bottom-5 flex flex-col gap-4 text-white z-10">
        <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaBehance size={20} />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
          <FaInstagram size={20} />
        </a>
      </div>

    </section>
  );
};

export default HeroSection;
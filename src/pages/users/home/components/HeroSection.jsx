import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);
  const videoUrl = "https://www.youtube.com/embed/VIDEO_ID?autoplay=1"; // حط هنا رابط الفيديو

  return (
    <section className="relative h-screen bg-black flex items-center justify-center font-outfit overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/omarA.png')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Text & Buttons */}
      <div className="relative z-10 max-w-2xl px-6 flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          Omar Abdelaziz
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-white text-sm sm:text-base md:text-lg mb-8"
        >
          Professional Video Editor & Motion Graphic Designer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          
          <button
            onClick={() => setShowVideo(true)}
            className="px-8 py-3 border border-white text-white font-bold rounded-full text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300"
          >
            Watch Showreel
            </button>
        </motion.div>
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

      {/* Video Overlay */}
      {showVideo && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 p-4">
          <div className="relative w-full max-w-3xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-2xl z-30"
            >
              &times;
            </button>
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src={videoUrl}
              title="Video Player"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

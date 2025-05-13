import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { getShowreelLink } from '../../../../redux/slices/showReelSlice';

const HeroSection = () => {
  const { showreelLink, showreelLoading, showreelErr } = useSelector((state) => state.myShowreel);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShowreelLink());
  }, [dispatch]);

  const [showVideo, setShowVideo] = useState(false);

  // لما تضغط برّه الـ iframe الفيديو يتقفل
  const handleOverlayClick = (e) => {
    if (e.target.id === 'overlay') {
      setShowVideo(false);
    }
  };

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
            disabled={showreelLoading || !showreelLink}
            className="px-8 py-3 border border-white text-white font-bold rounded-full text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300 disabled:opacity-50"
          >
            {showreelLoading ? "Loading..." : "Watch Showreel"}
          </button>
        </motion.div>

        {showreelErr && (
          <p className="text-red-500 mt-4 text-sm">{showreelErr}</p>
        )}
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
        <div
          id="overlay"
          onClick={handleOverlayClick}
          className="absolute inset-0 bg-black/80 flex items-center justify-center z-20 p-4"
        >
          <div className="relative w-full max-w-3xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-2 right-2 text-white text-2xl z-30"
            >
              &times;
            </button>

            {/* Spinner أثناء التحميل */}
            {showreelLoading ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-white"></div>
              </div>
            ) : (
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src={`${showreelLink.url}?autoplay=1`}
                title="Showreel Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;

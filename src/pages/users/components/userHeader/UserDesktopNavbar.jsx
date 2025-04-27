import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { motion } from 'framer-motion';

const UserDesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = ["Home", "Photo", "About Me", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-gray-900 shadow-md backdrop-blur-md' : 'bg-gray-900/80'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-2 px-4 lg:px-12">
        {/* Logo with Framer Motion */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <Typography
            variant="h4"
            className="cursor-pointer text-white font-extrabold tracking-tight text-xl sm:text-2xl drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]"
          >
            Omar <span className="text-gray-400">Portfolio</span>
          </Typography>
        </motion.div>

        {/* Navigation Links with Subtle Hover */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
              className="text-white text-xs sm:text-sm md:text-base font-medium relative"
              whileHover={{
                scale: 1.05,
                color: "#d1d5db", // رمادي فاتح عند الهوفر
                transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
              }}
            >
              {item}
            </motion.a>
          ))}
        </div>
      </div>
    </Navbar>
  );
};

export default UserDesktopNavbar;

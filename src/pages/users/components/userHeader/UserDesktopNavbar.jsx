import React, { useState, useEffect } from 'react';
import {
  Navbar,
  Typography,
} from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // important

const UserDesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Portoflio", link: "/portoflio" },
    { label: "About Me", link: "/about-me" },
    { label: "Contact Me", link: "/contact-me" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      className={`fixed top-0 w-full z-50 transition-all duration-500 font-outfit ${
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
            variant="h5"
            className="cursor-pointer text-white font-bold tracking-tight text-sm sm:text-lg md:text-2xl drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]"
          >
            Omar Abdelaziz
          </Typography>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex gap-4 sm:gap-6 md:gap-8 items-center">
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                transition: { type: "tween", ease: "easeInOut", duration: 0.3 },
              }}
            >
              <Link
                to={item.link}
                className="text-white text-[12px] sm:text-sm md:text-base font-medium"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Navbar>
  );
};

export default UserDesktopNavbar;

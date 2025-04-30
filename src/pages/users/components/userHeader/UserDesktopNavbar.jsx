import React, { useState, useEffect } from 'react';
import { Navbar, Typography } from "@material-tailwind/react";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UserDesktopNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", link: "/" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "About Me", link: "/about-me" },
    { label: "Contact Me", link: "/contact-me" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar
      fullWidth
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 font-outfit border-b border-white/10
        ${scrolled
          ? "bg-black/80 shadow-md backdrop-blur-md"
          : "bg-transparent "
        }
      `}
    >
      {/* wrapper داخلي للعناصر */}
      <div className="relative flex w-full items-center justify-between py-1 px-2 sm:px-4 md:px-6 lg:px-10 overflow-visible">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="absolute -top-6 -left-6 sm:-top-8 sm:-left-8 z-50"
        >
          <Link to="/" className="block">
                      <motion.img
                        src="/omarLogo.png"
                        alt="Omar Logo"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="h-20 sm:h-24 md:h-24 p-4 w-auto object-contain drop-shadow-[0_4px_10px_rgba(255,255,255,0.25)]"
                      />
                    </Link>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-end ml-auto gap-x-4 gap-y-2">
  {navItems.map((item, idx) => (
    <motion.div
      key={idx}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
    >
      <Link
        to={item.link}
        className="
          text-white font-medium
          text-xs sm:text-sm md:text-base
          hover:text-gray-300 transition-colors duration-300
        "
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

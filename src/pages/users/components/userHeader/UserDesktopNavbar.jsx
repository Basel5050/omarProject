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
      <div className="flex w-full items-center justify-between py-2 sm:py-3 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <Typography
            variant="h5"
            className="
              cursor-pointer text-white font-bold tracking-tight
              text-lg sm:text-xl md:text-2xl
              drop-shadow-[0_2px_4px_rgba(255,255,255,0.2)]
            "
          >
            Omar Abdelaziz
          </Typography>
        </motion.div>

        {/* Navigation Links */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 items-center">
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

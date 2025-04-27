import React, { useState } from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
const UserDesktopNavbar = () => {
    const [openNav, setOpenNav] = useState(false);

  const navItems = ["Home", "Photo", "About Me", "Contact"];
  return (
    <Navbar className="bg-gray-900 text-white px-6 py-4 rounded-none">
    <div className="container mx-auto flex items-center justify-between">
      {/* Logo */}
      <Typography variant="h6" className="cursor-pointer">
        Omar Portfolio
      </Typography>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6">
        {navItems.map((item, index) => (
          <Typography
            key={index}
            as="a"
            href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
            className="font-medium hover:text-gray-400 transition"
          >
            {item}
          </Typography>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <IconButton
        variant="text"
        className="lg:hidden text-white"
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </IconButton>
    </div>

    {/* Mobile Menu Collapse */}
    <Collapse open={openNav}>
      <div className="flex flex-col gap-4 mt-4 px-4 lg:hidden">
        {navItems.map((item, index) => (
          <Typography
            key={index}
            as="a"
            href={`#${item.replace(/\s+/g, '').toLowerCase()}`}
            className="font-medium hover:text-gray-400 transition"
          >
            {item}
          </Typography>
        ))}
      </div>
    </Collapse>
  </Navbar>
    )
}

export default UserDesktopNavbar
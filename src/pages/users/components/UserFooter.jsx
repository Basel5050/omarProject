import React from 'react'
import { FaWhatsapp, FaLinkedinIn, FaBehance, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const UserFooter = () => {
  return (
    <footer className="bg-black py-8 px-4 flex flex-col items-center justify-center font-outfit text-center">
      
      
      <Link to="/" className="block">
            <motion.img
              src="/omarLogo.png"
              alt="Omar Logo"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-32 sm:h-40 md:h-40 p-4  object-contain drop-shadow-[0_4px_10px_rgba(255,255,255,0.25)]"
            />
          </Link>
      {/* Social Media Links */}
      <div className="flex gap-6 mb-6">
        <a href="https://wa.me/201113503504" target="_blank" rel="noopener noreferrer" className="text-[#b43a3b] hover:text-[#f53848] transition">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.linkedin.com/in/omar-abd-el-aziz-919646286/" target="_blank" rel="noopener noreferrer" className="text-[#b43a3b] hover:text-[#f53848] transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.behance.net/omarabdaziz" target="_blank" rel="noopener noreferrer" className="text-[#b43a3b] hover:text-[#f53848] transition">
          <FaBehance size={20} />
        </a>
        <a href="https://www.instagram.com/omar_dinho" target="_blank" rel="noopener noreferrer" className="text-[#b43a3b] hover:text-[#f53848] transition">
          <FaInstagram size={20} />
        </a>
      </div>

      
      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} Omar Portfolio. All rights reserved.
      </p>
      </footer>

  )
}

export default UserFooter
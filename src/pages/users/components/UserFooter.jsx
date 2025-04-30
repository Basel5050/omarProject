import React from 'react'
import { FaWhatsapp, FaLinkedinIn, FaBehance, FaInstagram } from 'react-icons/fa';
import Logo from './logo/Logo';

const UserFooter = () => {
  return (
    <footer className="bg-black py-8 px-4 flex flex-col items-center justify-center font-outfit text-center">
      
      {/* اللوجو او الاسم */}
      <Logo/>

      {/* Social Media Links */}
      <div className="flex gap-6 mb-6">
        <a href="https://wa.me/201113503504" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.linkedin.com/in/omar-abd-el-aziz-919646286/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.behance.net/omarabdaziz" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaBehance size={20} />
        </a>
        <a href="https://www.instagram.com/omar_dinho" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaInstagram size={20} />
        </a>
      </div>

      {/* حقوق محفوظة */}
      <p className="text-gray-500 text-xs">
        © {new Date().getFullYear()} Omar Portfolio. All rights reserved.
      </p>
      </footer>

  )
}

export default UserFooter
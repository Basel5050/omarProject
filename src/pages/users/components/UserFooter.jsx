import React from 'react'
import { FaWhatsapp, FaLinkedinIn, FaBehance, FaInstagram } from 'react-icons/fa';

const UserFooter = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 flex flex-col items-center justify-center font-outfit text-center">
      
      {/* اللوجو او الاسم */}
      <h2 className="text-white text-2xl font-bold mb-4">Omar Abdelaziz</h2>

      {/* Social Media Links */}
      <div className="flex gap-6 mb-6">
        <a href="https://wa.me/201234567890" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaWhatsapp size={20} />
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaLinkedinIn size={20} />
        </a>
        <a href="https://www.behance.net/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
          <FaBehance size={20} />
        </a>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
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
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaBehance, FaWhatsapp } from 'react-icons/fa';
//done
const SocialMediaLinks = () => {
  return (
    <div className="fixed left-5 bottom-5 flex flex-col gap-4 text-white z-10">
            <a href="https://wa.me/201113503504" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://www.linkedin.com/in/omar-abd-el-aziz-919646286/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://www.behance.net/omarabdaziz" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaBehance size={20} />
            </a>
            <a href="https://www.instagram.com/omar_dinho" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
              <FaInstagram size={20} />
            </a>
          </div>
  )
}

export default SocialMediaLinks
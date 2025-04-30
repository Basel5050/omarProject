import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
const Logo = () => {
  return (

    <div>
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
    </div>

            )
}

export default Logo
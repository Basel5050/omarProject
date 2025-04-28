import React from 'react'
import { Link } from "react-router-dom"
const ContactSection = () => {
  return (
    <section className="relative bg-gray-900 py-24 flex flex-col items-center justify-center font-outfit overflow-hidden">
    {/* خلفية داكنة مدورة وراء الصورة */}
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-gray-800/50 to-gray-900/90 z-0"></div>

    {/* صورة Omar */}
    <div className="relative z-10 mb-8 animate-3d">
      <img
        src="/omar.jpg" // خلي بالك لازم الصورة تكون موجودة فعلا في public
        alt="Omar"
        className="w-48 h-48 object-cover rounded-full border-4 border-white/20 shadow-lg"
      />
    </div>

    {/* النص */}
    <div className="relative z-10 text-center">
      <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-4">
        Let's talk about<br /> your project
      </h2>
      <p className="text-gray-400 text-sm md:text-base mb-8">
        Could you send me a message below?
      </p>

      {/* الزرار */}
      <Link to="/contact-me">
        <button className="bg-gradient-to-r from-white to-gray-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300">
          Contact Me
        </button>
      </Link>
    </div>
  </section>
  )
}

export default ContactSection
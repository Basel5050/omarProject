import React from 'react';
import { FaVideo, FaMagic } from 'react-icons/fa';
import { SparklesIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Video Editing",
    description: "Professional video editing that brings ideas to life.",
    icon: <FaVideo />,
    link: "/portfolio/videoediting",
    gif: "/gif-02.gif",
  },
  {
    title: "Motion Graphics",
    description: "Creative motion design to enhance visual storytelling.",
    icon: <FaMagic />,
    link: "/portfolio/motiongraphics",
    gif: "/gif-01.gif",
  },
  {
    title: "Logo Animation",
    description: "Unique animated logos that capture your brand's identity.",
    icon: <SparklesIcon />,
    link: "/portfolio/logoanimation",
    gif: "/gif-03.gif",
  },
];

const MyServices = () => {
  return (
    <section
      id="services"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 flex flex-col items-center font-outfit"
    >
      <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-8">
        {services.map((service, index) => (
          <Link
            to={service.link}
            key={index}
            className="relative w-full max-w-xs sm:max-w-sm overflow-hidden rounded-2xl shadow-lg group transform hover:scale-105 transition duration-300"
          >
            {/* GIF background */}
            <img
              src={service.gif}
              alt={service.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-300"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center p-4">
              <div className="text-white text-3xl mb-2">{service.icon}</div>
              <h3 className="text-white text-xl font-bold">{service.title}</h3>
              <p className="text-gray-300 text-sm mt-1">{service.description}</p>
              <span className="mt-4 inline-block px-4 py-1 bg-white text-gray-800 rounded-full text-xs font-semibold group-hover:bg-gray-200 transition">
                See My Work
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MyServices;

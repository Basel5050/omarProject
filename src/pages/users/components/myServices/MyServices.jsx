import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaMagic } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { SparklesIcon } from '@heroicons/react/24/outline';

const services = [
  {
    title: "Video Editing",
    description: "Professional video editing that brings ideas to life.",
    icon: <FaVideo />,
    link: "/video-editing",
  },
  {
    title: "Motion Graphics",
    description: "Creative motion design to enhance visual storytelling.",
    icon: <FaMagic />,
    link: "/motion-graphics",
  },
  {
    title: "Logo Animation",
    description: "Unique animated logos that capture your brand's identity.",
    icon: <SparklesIcon />,
    link: "/logo-animation",
  }
];

const MyServices = () => {
  return (
    <section
      id="services"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 flex flex-col items-center font-outfit"
    >
      

      <div className="w-full max-w-6xl flex flex-wrap justify-center items-center gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 * (index % 2 === 0 ? 1 : -1) }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="w-full max-w-xs sm:max-w-sm"
          >
            <Tilt
              glareEnable
              glareMaxOpacity={0.15}
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              gyroscope
              className="bg-gray-800 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-white mb-5 text-3xl sm:text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm sm:text-base mb-5">
                {service.description}
              </p>

              {/* Button */}
              <a
                href={service.link}
                className="px-5 py-2 bg-gradient-to-r from-white to-gray-300 text-gray-900 rounded-full text-xs sm:text-sm font-semibold hover:scale-105 hover:from-gray-300 hover:to-white transition-all duration-300"
              >
                See My Work
              </a>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MyServices;

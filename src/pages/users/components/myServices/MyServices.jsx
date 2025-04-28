import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaMagic } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt'; // Tilt للكارت

const services = [
  {
    title: "Video Editing",
    description: "Professional video editing that brings ideas to life.",
    icon: <FaVideo size={40} />,
    link: "/video-editing",
  },
  {
    title: "Motion Graphics",
    description: "Creative motion design to enhance visual storytelling.",
    icon: <FaMagic size={40} />,
    link: "/motion-graphics",
  }
];
const MyServices = () => {
  return (
    <section id="services" className="bg-gray-900 py-20 px-6 flex flex-col items-center font-outfit">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12">

        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 * (index % 2 === 0 ? 1 : -1) }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.15}
              scale={1.05}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              gyroscope={true}    

              className="bg-gray-800 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-white mb-6 text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-bold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-6">{service.description}</p>

              {/* Button */}
              <a
                href={service.link}
                className="px-6 py-2 bg-gradient-to-r from-white to-gray-300 text-gray-900 rounded-full text-sm font-semibold hover:scale-105 hover:from-gray-300 hover:to-white transition-all duration-300"
              >
                See My Work
              </a>
            </Tilt>
          </motion.div>
        ))}

      </div>
    </section>
  )
}

export default MyServices
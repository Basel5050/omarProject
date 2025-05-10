import { Card, CardBody, CardHeader, Typography, Input, Textarea, Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaTiktok, FaInstagram, FaLinkedin, FaBehance } from "react-icons/fa";

const ContactMe = () => {
  return (
<div className="min-h-screen bg-black py-24 px-6 flex flex-col items-center font-outfit">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-7xl font-bold text-white mb-6 text-center font-sans"
      >
        Contact <span className="text-gradient bg-gradient-to-r  from-white to-cyan-900 bg-clip-text text-transparent">Me</span> 
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-1 bg-white rounded-full mb-12"
      ></motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-10 flex flex-wrap justify-center gap-6 text-white text-3xl"
      >
        <a href="https://wa.me/201113503504" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300 text-green-500">
          <FaWhatsapp />
        </a>
        <a href="omarazizhassan7@gmail.com" className="hover:scale-110 transition duration-300 text-blue-400">
          <FaEnvelope />
        </a>
        <a href="https://www.tiktok.com/@omariinho1?_t=ZS-8vwxV5KatIG&_r=1" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300 text-white">
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com/omar_dinho" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300 text-pink-500">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/omar-abd-el-aziz-919646286/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300 text-blue-600">
          <FaLinkedin />
        </a>
        <a href="https://www.behance.net/omarabdaziz" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition duration-300 text-blue-500">
          <FaBehance />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 shadow-lg"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Input size="lg" label="Your Name" className="text-white" color="white" />
            <Input size="lg" label="Your Email" className="text-white" color="white" />
            <Input size="lg" label="Phone Number" className="text-white sm:col-span-2" color="white" />
          </div>
          <Textarea label="Your Message" rows={6} className="text-white" color="white" />
          <div className="flex justify-center">
            <Button color="white" className="text-black font-semibold rounded-full px-10 py-2">
              Send Message
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
      )
}

export default ContactMe
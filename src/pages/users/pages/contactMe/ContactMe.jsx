import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaTiktok,
  FaInstagram,
  FaLinkedin,
  FaBehance,
  FaPhoneAlt,
  
} from "react-icons/fa";

import { MdPhoneIphone } from "react-icons/md";

const ContactMe = () => {
  const contacts = [
    {
      icon: <FaWhatsapp className="text-4xl text-[#b43a3b]" />,
      label: "+20 111 350 3504",
      link: "https://wa.me/201113503504",
      btn: "Send WhatsApp",
    },
    {
      icon: <FaEnvelope className="text-4xl text-[#b43a3b]" />,
      label: "omarazizhassan7@gmail.com",
      link: "mailto:omarazizhassan7@gmail.com",
      btn: "Send Email",
    },
    {
      icon: <MdPhoneIphone className="text-4xl text-[#b43a3b]" />,
      label: "+20 111 350 3504",
      link: "tel:+201113503504",
      btn: "Call Now",
    },
    
  ];

  return (
    <div className="min-h-screen bg-black py-32 px-4 sm:px-8 flex flex-col items-center font-outfit">
    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-4xl sm:text-6xl font-bold text-white mb-10 text-center font-sans"
    >
      Contact{" "}
      <span className="text-gradient bg-gradient-to-r from-white to-cyan-900 bg-clip-text text-transparent">
        Me
      </span>
    </motion.h2>
  
    {/* Line */}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "80px" }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="h-1 bg-white rounded-full mb-16"
    ></motion.div>
  
    {/* Contact Cards */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-2 sm:px-0"
    >
      {contacts.map((item, index) => (
        <Card
          key={index}
          className="bg-gradient-to-br from-gray-900 to-black text-white px-8 py-10 rounded-2xl shadow-xl flex flex-col items-center justify-between hover:scale-[1.03] transition-all duration-300"
        >
          <div className="mb-6">{item.icon}</div>
          <Typography className="mb-6 text-center text-lg sm:text-xl font-medium opacity-95 break-words">
            {item.label}
          </Typography>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="rounded-full px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition text-sm sm:text-base"
            >
              {item.btn}
            </Button>
          </a>
        </Card>
      ))}
    </motion.div>
  </div>
  
  );
};

export default ContactMe;

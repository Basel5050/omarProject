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

const ContactMe = () => {
  const contacts = [
    {
      icon: <FaWhatsapp className="text-4xl text-green-500" />,
      label: "+20 111 350 3504",
      link: "https://wa.me/201113503504",
      btn: "Send WhatsApp",
    },
    {
      icon: <FaEnvelope className="text-4xl text-blue-400" />,
      label: "omarazizhassan7@gmail.com",
      link: "mailto:omarazizhassan7@gmail.com",
      btn: "Send Email",
    },
    {
      icon: <FaPhoneAlt className="text-4xl text-yellow-500" />,
      label: "+20 111 350 3504",
      link: "tel:+201113503504",
      btn: "Call Now",
    },
    {
      icon: <FaTiktok className="text-4xl text-white" />,
      label: "@omariinho1",
      link: "https://www.tiktok.com/@omariinho1?_t=ZS-8vwxV5KatIG&_r=1",
      btn: "Visit TikTok",
    },
    {
      icon: <FaInstagram className="text-4xl text-pink-500" />,
      label: "@omar_dinho",
      link: "https://www.instagram.com/omar_dinho",
      btn: "Visit Instagram",
    },
    {
      icon: <FaLinkedin className="text-4xl text-blue-600" />,
      label: "Omar Abd El-Aziz",
      link: "https://www.linkedin.com/in/omar-abd-el-aziz-919646286/",
      btn: "Visit LinkedIn",
    },
    {
      icon: <FaBehance className="text-4xl text-blue-500" />,
      label: "omarabdaziz",
      link: "https://www.behance.net/omarabdaziz",
      btn: "Visit Behance",
    },
  ];

  return (
    <div className="min-h-screen bg-black py-24 px-4 sm:px-8 flex flex-col items-center font-outfit">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-6xl font-bold text-white mb-6 text-center font-sans"
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
        className="h-1 bg-white rounded-full mb-12"
      ></motion.div>

      {/* Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl"
      >
        {contacts.map((item, index) => (
          <Card
            key={index}
            className="bg-gradient-to-br from-gray-900 to-black text-white p-6 rounded-xl shadow-xl flex flex-col items-center justify-between hover:scale-[1.03] transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <Typography className="mb-4 text-center text-sm opacity-90">
              {item.label}
            </Typography>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="rounded-full px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200 transition"
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

import { Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div className="min-h-screen bg-black py-24 px-6 flex flex-col items-center font-outfit">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-white mb-6 text-center font-sans"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="h-1 bg-white rounded-full mb-12"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Card className="max-w-4xl w-full bg-gradient-to-br from-gray-900 to-black shadow-lg rounded-2xl overflow-hidden">
          <CardHeader floated={false} className="h-72 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            <img
              src="/omarA.png"
              alt="About Me"
              className="h-full w-full  object-cover"
            />
          </CardHeader>
          <CardBody className="text-center space-y-6">
            <Typography variant="h5" color="white" className="font-outfit font-extrabold mb-2">
              Welcome!
            </Typography>
            <Typography className="text-white font-outfit">
              I'm a passionate creator driven by a love for design, innovation, and crafting meaningful digital experiences.
            </Typography>
            <Typography className="text-white font-outfit">
              With a strong background in [Your Field] and a creative mindset, I specialize in turning ideas into visually stunning and functional solutions.
            </Typography>
            <Typography className="text-white font-outfit">
              I believe that great work stems from a blend of creativity, dedication, and attention to detail. Let's build something amazing together.
            </Typography>
          </CardBody>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 flex justify-center"
      >
        <Link 
        to={"https://wa.me/201113503504"}
        >
        <button className="bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition duration-300 shadow-md">
          Let’s Work Together
        </button>
        </Link>
        
      </motion.div>
    </div>
  );
}
export default AboutMe
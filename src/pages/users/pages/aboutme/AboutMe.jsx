import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-black py-24 px-6 font-outfit text-white flex justify-center items-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-start">
        
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:sticky top-28 self-start flex justify-center md:justify-start"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg shadow-white/10 border border-gray-700">
            <img
              src="/omarA.png"
              alt="Omar"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-gray-900/20 via-gray-700/10 to-transparent animate-pulse"></div>
          </div>
        </motion.div>

        
        <div className="flex flex-col gap-20 text-left">

          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              Who is <span className="text-gradient bg-gradient-to-r from-white to-cyan-900 bg-clip-text text-transparent">Omar</span>?
            </h2>
            <ul className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <li>🎬 Over 7 years of experience in post-production and video editing.</li>
              <li>🌍 I’ve collaborated with top brands in Egypt and Saudi Arabia on innovative high-end video editing projects.</li>
              <li>🧠 Specializing in advanced editing and high-quality motion graphics.</li>
              <li>🚀  am capable of turning concepts into an engaging visual story across all stages of production.</li>
            </ul>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold">
              Why <span className="text-gradient bg-gradient-to-r  from-white to-cyan-900 bg-clip-text text-transparent">Omar</span>?
            </h2>
            <div className="text-gray-300 text-lg leading-relaxed space-y-4">
              <p>🎯 Bringing ideas to life with a clear vision and technical expertise.</p>
              <p>🎞️ Proficient in <strong>After Effects, Premiere Pro</strong>, always up-to-date with the latest cutting-edge editing.</p>
              <p>🔥 Skilled in thriving under pressure, meeting tight deadlines, and delivering impactful visual content.</p>
              <p>🌍 Flexible and open to travel, able to adapt to various work environments and project needs.</p>
              <p className="font-semibold text-white">If you're looking for a creative leader who understands every step of the production process — I'm the one.</p>
            </div>

            <div className="flex justify-start">
              <Link to="https://wa.me/201113503504" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold shadow hover:from-gray-200 hover:to-white transition-all"
                >
                  Let’s Work Together
                </motion.button>
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;

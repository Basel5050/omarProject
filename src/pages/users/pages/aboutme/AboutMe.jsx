import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <section className="min-h-screen bg-black py-24 px-6 font-outfit text-white flex justify-center items-center">
      <div className="max-w-6xl w-full flex flex-col gap-20">
        
        {/* Section 1: Who is Omar */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
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
              <li>🎬 Remote Post-Production Lead & Video Editor with 7+ years of experience.</li>
              <li>🌍 Worked with leading brands in Egypt and GCC on cinematic projects.</li>
              <li>🧠 Specializes in high-end motion graphics and video storytelling.</li>
              <li>👥 Team leader with strong creative direction and workflow management.</li>
              <li>🚀 Capable of handling full production pipelines from start to finish.</li>
            </ul>
          </motion.div>
        </div>

        {/* Section 2: Why Omar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h2 className="text-4xl font-bold">
            Why <span className="text-gradient bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Omar</span>?
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed space-y-4">
            <p>🎯 Bringing ideas to life with a clear vision, technical expertise, and leadership.</p>
            <p>🎞️ Expert in <strong>After Effects, Premiere Pro</strong>, and advanced motion techniques.</p>
            <p>⚙️ Strong ability to manage and optimize workflows for efficient, high-quality output.</p>
            <p>🤝 Skilled in team collaboration, delegation, and maintaining creative consistency across all project stages.</p>
            <p>🔥 Adept at working under pressure, meeting tight deadlines, and delivering impactful visuals.</p>
            <p className="font-semibold text-white">If you're looking for a creative leader who understands every step of the production process — I'm the one.</p>
          </div>

          <Link to="https://wa.me/201113503504" target="_blank">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold shadow hover:from-gray-200 hover:to-white transition-all"
            >
              Let’s Work Together
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;

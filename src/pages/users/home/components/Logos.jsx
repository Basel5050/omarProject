import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const logos = [
  '/logo-24.webp',
  '/logo-02.png',
  '/logo-03.png',
  '/logo-04.png',
  '/logo-06.png',
  '/logo-07.png',
  '/logo-08.webp',
  '/logo-09.png',
  '/logo-10.png',
  '/logo-11.png',
  '/logo-12.png',
  '/logo-14.webp',
  '/logo-15.webp',
  '/logo-16.webp',
  '/logo-18.webp',
  '/logo-19.webp',
  '/logo-20.webp',
  '/logo-21.png',
  '/logo-22.webp',
  '/logo-23.webp',
  '/logo-24.webp',
];

const clientsCount = 300;
const projectsCount = 1000;

const Logos = () => {
  const [statsRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="bg-black py-16 px-6 font-outfit">
      {/* Logos Grid */}
      <div className="relative max-w-6xl mx-auto mb-16">
        
        {/* خلفية متدرجة */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black/70 to-gray-900/50 rounded-3xl blur-sm"></div>
        
        <h2 className="relative text-4xl md:text-5xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-wider z-10">
          Our Partners
        </h2>

        <div className="relative flex flex-wrap justify-center items-center gap-12 z-10">
          {logos.map((src, i) => (
            <div
              key={i}
              className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center 
                         bg-gray-900 rounded-2xl shadow-md p-4 
                         opacity-60 hover:opacity-100 hover:scale-105 
                         transition-all duration-500 cursor-pointer"
            >
              <img
                src={src}
                alt={`Partner ${i}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Counters */}
      <div
        ref={statsRef}
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12 text-center mt-20"
      >
        {/* Clients */}
        <div className={`bg-gray-900 rounded-xl p-10 shadow-lg border border-gray-700 
                        ${inView ? 'animate-pulse' : ''}`}>
          <h3 className="text-white uppercase mb-4 tracking-widest text-lg font-extrabold">
            Clients
          </h3>
          <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            {inView ? <CountUp end={clientsCount} duration={2} /> : 0}
            <span className="text-3xl">+</span>
          </div>
        </div>

        {/* Projects */}
        <div className={`bg-gray-900 rounded-xl p-10 shadow-lg border border-gray-700 
                        ${inView ? 'animate-pulse' : ''}`}>
          <h3 className="text-white font-extrabold uppercase mb-4 tracking-widest text-lg">
            Projects
          </h3>
          <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            {inView ? <CountUp end={projectsCount} duration={2} /> : 0}
            <span className="text-3xl">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;

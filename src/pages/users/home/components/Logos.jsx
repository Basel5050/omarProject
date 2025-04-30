import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const logos = [
  '/logo-01.webp',
  '/logo-02.webp',
  '/logo-03.webp',
  '/logo-04.webp',
  '/logo-05.webp',
  '/logo-06.webp',
  '/logo-07.webp',
  '/logo-08.webp',
  '/logo-10.webp',
  '/logo-11.webp',
  '/logo-12.webp',
  '/logo-13.webp',
  '/logo-14.webp',
  '/logo-15.webp',
  
];

const clientsCount = 300;
const projectsCount = 1000;

const Logos = () => {
  const [statsRef, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section className="bg-black py-20 px-4 sm:px-6 font-outfit">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 uppercase tracking-wider">
          Our Partners
        </h2>
      </div>

      {/* Logos Grid */}
      <div className="flex flex-wrap justify-evenly items-center gap-8 sm:gap-10 max-w-7xl mx-auto">
        {logos.map((src, i) => (
          <div key={i} className="w-28 sm:w-48 md:w-52">
            <img
              src={src}
              alt={`Partner ${i}`}
              className="w-full h-auto object-contain opacity-70 hover:opacity-100 transition duration-300 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Counters */}
      <div
        ref={statsRef}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center mt-20 px-4"
      >
        <div className={`p-8 sm:p-10 ${inView ? 'animate-pulse' : ''}`}>
          <h3 className="text-white uppercase mb-4 tracking-widest text-base sm:text-lg font-extrabold">
            Clients
          </h3>
          <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            {inView ? <CountUp end={clientsCount} duration={2} /> : 0}
            <span className="text-2xl sm:text-3xl">+</span>
          </div>
        </div>

        <div className={`p-8 sm:p-10 ${inView ? 'animate-pulse' : ''}`}>
          <h3 className="text-white uppercase mb-4 tracking-widest text-base sm:text-lg font-extrabold">
            Projects
          </h3>
          <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            {inView ? <CountUp end={projectsCount} duration={2} /> : 0}
            <span className="text-2xl sm:text-3xl">+</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logos;
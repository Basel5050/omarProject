import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// مثال على بيانات الشعارات وعدد العملاء والمشاريع
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
  // أضف مسارات اللوجو اللي عندك
];

const clientsCount = 25;
const projectsCount = 80;
const Logos = () => {
    const [statsRef, inView] = useInView({
        threshold: 0.3,
        triggerOnce: true,
      });
    
      return (
        <section className="bg-black py-16 px-6">
          {/* Logos Grid */}
          <div className="max-w-6xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-white">Our Partners</h2>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {logos.map((src, i) => (
                <div key={i} className="w-24 h-24 flex items-center justify-center  ">
                  <img src={src} alt={`Partner ${i}`} className="max-h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
    
          {/* Counters */}
          <div
            ref={statsRef}
            className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center"
          >
            {/* Clients */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-white uppercase mb-2">Clients</h3>
              <div className="text-5xl font-extrabold text-white">
                {inView ? <CountUp end={clientsCount} duration={2} /> : 0}
                <span className="text-3xl">+</span>
              </div>
            </div>
    
            {/* Projects */}
            <div className="bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className=" uppercase mb-2">Projects</h3>
              <div className="text-5xl font-extrabold text-white">
                {inView ? <CountUp end={projectsCount} duration={2} /> : 0}
                <span className="text-3xl">+</span>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Logos
import React from 'react'
import MyServices from '../../components/myServices/MyServices';

const Portfolio = () => {
    
    
  return (
<div className="min-h-screen bg-black py-20 px-6 flex flex-col items-center font-outfit">

<div className="w-full py-5 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-4">
          Portfolio
        </h2>
        <p className="text-gray-400 text-lg md:text-xl">
          Explore my best works in video editing, motion graphics, and logo animation. Each project reflects creativity, technical precision, and passion for visual storytelling.
        </p>
      </div>
        <MyServices/>
        
</div>


  )
}

export default Portfolio
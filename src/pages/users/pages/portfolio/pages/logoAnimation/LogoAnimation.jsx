import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaTimes, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getLogo } from '../../../../../../redux/slices/logoSlice';





const LogoAnimation = () => {
    const [selected, setSelected] = useState(null);
    const {logoData }= useSelector((state)=>state.logoAnimation)
    const dispatch = useDispatch()
    console.log(logoData);
    useEffect(()=>{
      dispatch(getLogo())
    },[dispatch])
    
  return (
   <div className="font-outfit bg-black text-white min-h-screen">
         {/* ====== Hero-like Banner (moved down for navbar) ====== */}
         <section className="pt-28 flex flex-col items-center">
           <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
LOGO ANIMATION           </h1>
           <p className="text-lg md:text-xl font-light">
             Dynamic animations & visual storytelling
           </p>
         </section>
   
         {/* ====== Latest Work Section ====== */}
         <section className="pt-12 px-6">
           <div className="text-center mb-10">
             <h2 className="text-4xl font-extrabold">Latest Work.</h2>
             <div className="mt-2 w-16 h-1 bg-white mx-auto" />
           </div>
   
           {/* flex-wrap gallery */}
           <div className="flex flex-wrap justify-evenly gap-8">
             {logoData.map((vid, idx) => (
               <div
                 key={idx}
                 className="relative w-[280px] h-[160px] overflow-hidden rounded-xl cursor-pointer group"
                 onClick={() => setSelected(vid)}
               >
                 {/* thumbnail */}
                 <img
                   src={vid.thumbnail}
                   alt={vid.title}
                   className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                 />
   
                 {/* play overlay */}
                 <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <FaPlay className="text-white text-4xl" />
                 </div>
   
                 {/* title bar */}
                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-2 px-3">
                   <h3 className="text-sm font-medium">{vid.title}</h3>
                 </div>
               </div>
             ))}
           </div>
         </section>
   
         {/* ====== Fullscreen Video Modal ====== */}
         {selected && (
           <div
             className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
             onClick={() => setSelected(null)}
           >
             <div
               className="relative w-full max-w-4xl"
               style={{ paddingTop: '56.25%' }} // 16:9 aspect
             >
               {/* close button */}
               <button
                 className="absolute top-2 right-2 text-white text-3xl z-10"
                 onClick={() => setSelected(null)}
               >
                 <FaTimes />
               </button>
   
               {/* player */}
               <div className="absolute inset-0">
                 <ReactPlayer
                   url={`${selected.url}?autoplay=1`}
                   width="100%"
                   height="100%"
                   controls
                   playing
                 />
               </div>
             </div>
           </div>
         )}
       </div>
     );
   
}

export default LogoAnimation
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaTimes, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from "../../../../../../redux/slices/videoSlice";




const VideoEditing = () => {
  const [selected, setSelected] = useState(null);
  const {videosData}= useSelector((state)=>state.videos)
      const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(getVideos())
      },[dispatch])
    return (
      <div className="font-outfit bg-black text-white min-h-screen">
        <section className="pt-28 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2">
          VIDEO EDITING
          </h1>
          <p className="text-lg md:text-xl font-light">
            Dynamic animations & visual storytelling
          </p>
        </section>
  
        <section className="pt-12 px-6">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-extrabold">Latest Work.</h2>
            <div className="mt-2 w-16 h-1 bg-white mx-auto" />
          </div>
  
          <div className="flex flex-wrap justify-evenly gap-8">
            {videosData.map((vid, idx) => (
              <div
                key={idx}
                className="relative w-[280px] h-[160px] overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelected(vid)}
              >
                <img
                  src={vid.thumbnail}
                  alt={vid.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
  
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <FaPlay className="text-white text-4xl" />
                </div>
  
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-2 px-3">
                  <h3 className="text-sm font-medium">{vid.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {selected && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            onClick={() => setSelected(null)}
          >
            <div
              className="relative w-full max-w-4xl"
              style={{ paddingTop: '56.25%' }} 
            >
              <button
                className="absolute top-2 right-2 text-white text-3xl z-10"
                onClick={() => setSelected(null)}
              >
                <FaTimes />
              </button>
  
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

export default VideoEditing
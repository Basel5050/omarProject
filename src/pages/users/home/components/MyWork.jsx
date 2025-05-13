import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { FaTimes, FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { getLastWork } from "../../../../redux/slices/lastWrokSlice";


export default function MyWork() {
  const swiperRef = useRef(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
   const {lastData}= useSelector((state)=>state.latestWork)
        const dispatch = useDispatch()
        useEffect(()=>{
          dispatch(getLastWork())
        },[dispatch])

  useEffect(() => {
    if (!swiperRef.current) return;
    if (selectedVideo) swiperRef.current.autoplay.stop();
    else swiperRef.current.autoplay.start();
  }, [selectedVideo]);

  const onSlideChange = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  return (
    <section className="bg-black py-16 px-4 flex flex-col items-center" >
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12"> <span className="text-gradient bg-gradient-to-r  from-white to-cyan-900 bg-clip-text text-transparent">Latest</span> Work</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides
        slidesPerView="auto"
        loop
        speed={8000}
        autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
        navigation
        pagination={{ clickable: true }}
        onSwiper={s => (swiperRef.current = s)}
        onSlideChange={onSlideChange}
        className="w-full max-w-6xl"
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2.2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {lastData.map((video, i) => (
          <SwiperSlide key={i} className="flex justify-center">
            <div
              className="w-full max-w-lg bg-gray-800 rounded-3xl overflow-hidden shadow-2xl
                         group relative cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <img loading='lazy'
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover
                             group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center
                                bg-black bg-opacity-40 opacity-0 group-hover:opacity-100
                                transition-opacity duration-300">
                  <FaPlay className="text-white text-5xl" />
                </div>
              </div>
              <div className="absolute bottom-0 w-full py-3 px-4
                              bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white text-xl font-semibold text-center">
                  {video.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* — Fullscreen Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            style={{ paddingTop: '56.25%' }} 
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl z-10"
              onClick={() => setSelectedVideo(null)}
            >
              <FaTimes />
            </button>
            <div className="absolute inset-0">
              <ReactPlayer
url={selectedVideo.url}
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

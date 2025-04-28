import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const videos = [
  {
    url: "https://www.youtube.com/embed/TgHcTailbao?enablejsapi=1",
    title: "Creative Ad Project",
  },
  {
    url: "https://www.youtube.com/embed/koebVg0ay7I?enablejsapi=1",
    title: "Motion Graphics Reel",
  },
  {
    url: "https://www.youtube.com/embed/SwHv6xGGBBQ?enablejsapi=1",
    title: "Short Film Cut",
  },
  {
    url: "https://www.youtube.com/embed/Yq7Yy8H5J-8?enablejsapi=1",
    title: "Commercial Trailer",
  },
];

const MyWork = () => {

  const stopVideos = () => {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach((iframe) => {
      iframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
    });
  };

  return (
    <section id="mywork" className="bg-gray-900 py-20 px-6 flex flex-col items-center font-outfit">
      <h2 className="text-white text-4xl font-bold mb-12">My Work</h2>

      <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={40}
  centeredSlides={true}
  slidesPerView={'auto'}
  navigation
  pagination={{
    clickable: true,
  }}
  loop={false}
  onSlideChange={() => stopVideos()}
  className="max-w-7xl w-full pb-32 relative"
>
  {videos.map((video, index) => (
    <SwiperSlide
      key={index}
      className="flex flex-col items-center group animate-3d"
      style={{ width: '600px' }}
    >
      {/* Video Card */}
      <div className="relative w-full aspect-[2.39/1] overflow-hidden rounded-3xl bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-gray-400/30 group-hover:border-white/50 transition-all duration-700 ease-in-out">
        <iframe
          src={video.url}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="w-full h-full rounded-3xl group-hover:scale-105 transition-transform duration-700 ease-in-out"
        ></iframe>

        {/* Glow عند Hover */}
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl pointer-events-none"></div>
      </div>

      {/* Caption تحت الفيديو */}
      <div className="mt-6 text-center">
        <h3 className="text-white text-lg font-semibold opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
          {video.title}
        </h3>
      </div>
    </SwiperSlide>
  ))}
</Swiper>
    </section>
  );
};

export default MyWork;

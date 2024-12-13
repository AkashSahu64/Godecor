import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const videos = [
  'https://example.com/video1.mp4',
  'https://example.com/video2.mp4',
  'https://example.com/video3.mp4'
];

const HeroSection = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[80vh] bg-gray-900">
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative h-full flex items-center justify-center text-white z-20">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
            Bring Nature Indoors with Zero Effort
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Durable, Eco-Friendly, and Maintenance-Free
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/products" className="btn-primary text-lg px-8 py-3 hover:scale-105 transition-transform">
              Shop Now
            </Link>
            <Link to="/about" className="btn-secondary text-lg px-8 py-3 hover:scale-105 transition-transform">
              Explore Now
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={() => setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-green-400 transition-colors"
      >
        {/* <ChevronLeft size={40} /> */}
      </button>
      <button 
        onClick={() => setCurrentVideo((prev) => (prev + 1) % videos.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white hover:text-green-400 transition-colors"
      >
        {/* <ChevronRight size={40} /> */}
      </button>

      {/* Video Background */}
      <video
        key={videos[currentVideo]}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>
    </section>
  );
};

export default HeroSection;
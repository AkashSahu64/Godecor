import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProductShowcase from '../components/home/ProductShowcase';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import SpecialOffers from '../components/home/SpecialOffers';
import BlogSection from '../components/home/BlogSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductShowcase />
      <div className="container mx-auto px-4">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 space-y-8">
      <Features />
      <Testimonials />
      <SpecialOffers />
    </div>
    <div className="lg:col-span-1">
      <BlogSection />
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
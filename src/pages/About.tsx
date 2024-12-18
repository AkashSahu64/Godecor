import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="section-title">About Godecor</h1>

        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[520px] rounded-xl overflow-hidden mb-16">
          <img
            src="https://img.freepik.com/premium-photo/set-artificial-plants-flower-pots-isolated-white_144356-34526.jpg"
            alt="Godecor Office"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-white text-xl sm:text-2xl md:text-4xl font-bold max-w-[60rem]">
              Transform Your Space with Nature's Charm—No Effort, Just Elegance!
            </h1>
            <p className="text-white mt-4 text-sm sm:text-base md:text-lg max-w-[50rem]">
              Bring the soothing essence of greenery into your home or office without the hassle of maintenance.
              Our premium artificial plants are designed to mimic the beauty of real foliage, adding elegance and
              life to any space. Say goodbye to watering, pruning, and wilting—just pure natural charm that lasts
              forever. Elevate your decor effortlessly with a touch of nature’s perfection!
            </p>
          </div>
        </div>


        {/* Our Story */}
        <div className="mb-16 lg:ml-24 lg:mr-24">
          <h2 className="text-2xl font-bold mb-4 border-b border-gray-400 ">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2020, Godecor was born from a vision to redefine the way people experience greenery in their everyday lives. We began with a simple yet powerful mission: to bring the beauty and tranquility of nature indoors without the burden of upkeep. Understanding the fast-paced lives of modern individuals, we recognized that while many people adore the aesthetic charm and calming presence of plants, not everyone has the time, expertise, or consistency required to nurture them.
          </p>
          <p className="text-gray-600 leading-relaxed">
          At Godecor, we blend artistry with innovation to craft artificial plants that are indistinguishable from the real thing. Each piece is thoughtfully designed with meticulous attention to detail, ensuring stunning realism, durability, and timeless beauty. Whether you’re a busy professional, a pet owner concerned about safety, or someone who simply wants to elevate their home or office space, our products provide the perfect solution.
          </p>
          <p className="text-gray-600 leading-relaxed">
          With Godecor, you can enjoy lush, vibrant greenery that remains fresh and beautiful all year round, no watering, pruning, or wilting required. Our creations transform spaces into serene sanctuaries, offering a slice of nature that fits seamlessly into your lifestyle. For us, it’s not just about decor—it’s about bringing joy, peace, and elegance to every corner of your life.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 lg:ml-24 lg:mr-24">
          {[
            { icon: Leaf, title: 'Quality', text: 'Premium materials and craftsmanship' },
            { icon: Heart, title: 'Passion', text: 'Love for design and nature' },
            { icon: Users, title: 'Community', text: 'Building relationships with customers' },
            { icon: Shield, title: 'Trust', text: 'Reliable products and service' }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-lg shadow-md"
            >
              <value.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Team */}
        <div className='lg:ml-24 lg:mr-24'>
          <h2 className="text-2xl font-bold mb-8 border-b border-gray-400">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Vinay Kumar',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
              },
              {
                name: 'Vinay Kumar',
                role: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
              },
              {
                name: 'Vinay Kumar',
                role: 'Product Manager',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
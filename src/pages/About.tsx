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
        <div className="relative h-[400px] rounded-xl overflow-hidden mb-16">
          <img
            src="https://images.unsplash.com/photo-1558603668-6570496b66f8"
            alt="Plantify Office"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <p className="text-white text-2xl md:text-4xl font-bold text-center max-w-2xl px-4">
              Bringing Nature's Beauty to Your Space, Without the Maintenance
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 2020, Godecor began with a simple mission: to bring the beauty of nature 
            indoors without the hassle of maintenance. We understand that while many people love 
            the aesthetic appeal of plants, not everyone has the time or expertise to care for them.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our artificial plants combine stunning realism with durability, offering a perfect 
            solution for busy professionals, pet owners, and anyone seeking to enhance their space 
            with greenery that stays beautiful year-round.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
        <div>
          <h2 className="text-2xl font-bold mb-8">Our Team</h2>
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
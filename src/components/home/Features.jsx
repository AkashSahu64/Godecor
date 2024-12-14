import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Truck, Shield, Clock, Heart, Star } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Premium Quality',
    description: 'Handcrafted artificial plants that look and feel incredibly real',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: Shield,
    title: 'Eco-Friendly',
    description: 'Sustainable materials that help reduce water consumption',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: Clock,
    title: 'Zero Maintenance',
    description: 'No watering, pruning, or special care needed',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'Free delivery on all orders over all India',
    color: 'bg-orange-50 text-orange-600'
  },
  {
    icon: Heart,
    title: 'Customer Love',
    description: '100% satisfaction guaranteed or money back',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    icon: Star,
    title: 'Expert Design',
    description: 'Professionally designed to enhance any space',
    color: 'bg-yellow-50 text-yellow-600'
  }
];

const Features = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`${feature.color} p-6 rounded-xl hover:scale-105 transition-transform cursor-pointer`}
          >
            <feature.icon className="w-10 h-10 mb-4" />
            <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
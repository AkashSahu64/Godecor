import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    rating: 5,
    comment: 'The artificial plants look so realistic! My office looks amazing now.',
    date: 'March 15, 2024',
    productImage: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    productLink: 'https://www.flipkart.com/home-decor/artificial-flowers-plants/pr?sid=1m7,76z'
  },
  {
    id: 2,
    name: 'Michael Brown',
    rating: 5,
    comment: 'Great quality and fast shipping. Highly recommended!',
    date: 'March 14, 2024',
    productImage: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    productLink: 'https://www.flipkart.com/home-decor/artificial-flowers-plants/pr?sid=1m7,76z'
  },
  {
    id: 3,
    name: 'Sarah Wilson',
    rating: 5,
    comment: 'Perfect for my apartment! No maintenance required and looks beautiful.',
    date: 'March 13, 2024',
    productImage: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    productLink: 'https://www.flipkart.com/home-decor/artificial-flowers-plants/pr?sid=1m7,76z'
  },
  {
    id: 4,
    name: 'David Chen',
    rating: 5,
    comment: 'Excellent customer service and the plants look incredibly real!',
    date: 'March 12, 2024',
    productImage: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
    productLink: 'https://www.flipkart.com/home-decor/artificial-flowers-plants/pr?sid=1m7,76z'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center space-x-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold text-gray-800">{testimonial.name}</span>
              <span className="text-sm text-gray-500">{testimonial.date}</span>
            </div>
            <a
              href={testimonial.productLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative group"
            >
              <img
                src={testimonial.productImage}
                alt="Customer's Plant"
                className="w-full h-48 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
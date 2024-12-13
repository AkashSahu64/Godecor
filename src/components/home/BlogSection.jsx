import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: '10 Creative Ways to Display Artificial Plants',
    excerpt: 'Transform your space with these innovative ideas for showcasing artificial plants. From hanging gardens to statement pieces...',
    image: 'https://images.unsplash.com/photo-1545165375-1b744b9ed444',
    category: 'Design Tips'
  },
  {
    id: '2',
    title: 'The Benefits of Artificial Plants in the Workplace',
    excerpt: 'Discover how artificial plants can boost productivity, reduce stress, and create a more inviting office environment...',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36',
    category: 'Office Design'
  },
  {
    id: '3',
    title: 'Maintaining Your Artificial Plants',
    excerpt: 'Learn expert tips and tricks to keep your artificial plants looking fresh and beautiful for years to come...',
    image: 'https://images.unsplash.com/photo-1517497869-39a5e582c76b',
    category: 'Care Guide'
  },
  {
    id: '4',
    title: 'Seasonal Decorating with Artificial Plants',
    excerpt: 'Get inspired with our seasonal decorating guide featuring artificial plants that look perfect all year round...',
    image: 'https://images.unsplash.com/photo-1517497869-39a5e582c76b',
    category: 'Seasonal Tips'
  }
];

const BlogSection = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group cursor-pointer bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                {post.category}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold group-hover:text-green-600 transition-colors mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex items-center text-green-600 group-hover:text-green-700">
                <span className="text-sm font-medium">Read More</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
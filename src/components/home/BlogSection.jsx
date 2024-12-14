import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: '10 Creative Ways to Display Artificial Plants',
    excerpt: 'Transform your space with these innovative ideas for showcasing artificial plants. From hanging gardens to statement pieces...',
    image: 'https://www.spotlightstores.com/medias/artificial-plants-buying-guide-1.jpg?context=bWFzdGVyfHJvb3R8MTQ3MjkyfGltYWdlL2pwZWd8cm9vdC9oZGIvaGFlLzE2ODY1MDY3Njk2MTU4L2FydGlmaWNpYWwtcGxhbnRzLWJ1eWluZy1ndWlkZS0xLmpwZ3xkODRiZjFiYmZkZDE4MzRlOTAxOWRmZjJhMTZjMDQzZjNjZTljZjNjMzU1NGRhNWE3MGZmNTUyOGZjNmExNDQ1',
    category: 'Design Tips'
  },
  {
    id: '2',
    title: 'The Benefits of Artificial Plants in the Workplace',
    excerpt: 'Discover how artificial plants can boost productivity, reduce stress, and create a more inviting office environment...',
    image: 'https://www.thesenior.com.au/images/transform/v1/crop/frm/rosie.ryan%40fairfaxmedia.com.au/b1d3bf72-2b17-47e7-89fa-2d0ee098fddf.jpg/r0_0_6720_4331_w1200_h678_fmax.jpg',
    category: 'Office Design'
  },
  {
    id: '3',
    title: 'Maintaining Your Artificial Plants',
    excerpt: 'Learn expert tips and tricks to keep your artificial plants looking fresh and beautiful for years to come...',
    image: 'https://www.homeartificial.com/wp-content/uploads/2023/10/how_to_decorate_with_artificial_plants.webp',
    category: 'Care Guide'
  },
  {
    id: '4',
    title: 'Seasonal Decorating with Artificial Plants',
    excerpt: 'Get inspired with our seasonal decorating guide featuring artificial plants that look perfect all year round...',
    image: 'https://img.staticmb.com/mbcontent/images/uploads/2023/3/A-variety-of-green-artificial-plants-for-home-decor.jpg',
    category: 'Seasonal Tips'
  }
];

const BlogSection = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">Latest from Our Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
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
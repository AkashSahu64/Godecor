import React from 'react';
import { motion } from 'framer-motion';
import { products } from '../../data/products';
import ProductCard from '../products/ProductCard';

const ProductShowcase = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="container mx-auto px-4 py-14">
      <h2 className="section-title">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-6">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
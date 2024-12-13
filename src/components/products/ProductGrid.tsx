import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types';
import { motion } from 'framer-motion';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
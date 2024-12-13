import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.isBestSeller && (
          <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">
            Best Seller
          </span>
        )}
        {product.isNewArrival && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
            New Arrival
          </span>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${product.price}</span>
          <button className="btn-primary flex items-center space-x-2">
            <ShoppingCart size={20} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
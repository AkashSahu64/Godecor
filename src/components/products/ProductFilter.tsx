import React from 'react';
import { Filter, Search } from 'lucide-react';

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  onClose?: () => void; // Optional close button for small devices
}

const ProductFilter = ({
  categories,
  selectedCategory,
  onCategoryChange,
  searchTerm,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  onClose,
}: ProductFilterProps) => {
  return (
    <div className="w-full md:w-64 bg-white p-4 rounded-lg h-fit space-y-6">
      {/* Close Button for Small Devices */}
      {onClose && (
        <div className="flex justify-end">
          <button onClick={onClose} className="text-red-500 font-bold">
            Close
          </button>
        </div>
      )}

      {/* Search */}
      <div className="space-y-2">
        <h3 className="font-semibold">Search</h3>
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Filter size={20} className="text-green-600" />
          <h3 className="font-semibold">Categories</h3>
        </div>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'hover:bg-green-50'
              }`}
            >
              {category === 'all' ? 'All Products' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <h3 className="font-semibold">Price Range</h3>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) =>
              onPriceRangeChange([priceRange[0], parseInt(e.target.value)])
            }
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;

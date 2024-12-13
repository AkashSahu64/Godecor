import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilter from '../components/products/ProductFilter';
import { products } from '../data/products';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);

  const categories = ['all', 'Large Plants', 'Small Plants', 'Hanging Plants', 'Artificial Trees', 'Artificial Flowers'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Category filter
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      // Search filter
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Price filter
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];

      return categoryMatch && searchMatch && priceMatch;
    });
  }, [selectedCategory, searchTerm, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="section-title">Our Products</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <ProductFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          priceRange={priceRange}
          onPriceRangeChange={setPriceRange}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default Products;
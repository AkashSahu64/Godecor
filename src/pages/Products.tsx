import React, { useState, useMemo } from 'react';
import ProductGrid from '../components/products/ProductGrid';
import ProductFilter from '../components/products/ProductFilter';
import { products } from '../data/products';
import { Filter } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [showFilter, setShowFilter] = useState(false); // Toggle filter visibility

  const categories = [
    'all',
    'Large Plants',
    'Small Plants',
    'Hanging Plants',
    'Artificial Trees',
    'Artificial Flowers',
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === 'all' || product.category === selectedCategory;
      const searchMatch = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && searchMatch && priceMatch;
    });
  }, [selectedCategory, searchTerm, priceRange]);

  const handleFilterApply = () => {
    setShowFilter(false); // Hide filter after applying
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading */}
      <h1 className="section-title text-center mb-6">Our Products</h1>

      {/* Filter Button for Small Devices */}
      <div className="md:hidden flex justify-start mb-4">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg shadow-md flex items-center"
        >
          <Filter size={20} className="mr-2" />
          Filter
        </button>
      </div>

      {/* Filter Options for Small Devices */}
      {showFilter && (
        <div className="md:hidden w-full bg-white p-4 rounded-lg shadow-lg mb-4">
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={(category) => {
              setSelectedCategory(category);
              handleFilterApply();
            }}
            searchTerm={searchTerm}
            onSearchChange={(term) => {
              setSearchTerm(term);
              handleFilterApply();
            }}
            priceRange={priceRange}
            onPriceRangeChange={(range) => {
              setPriceRange(range);
              handleFilterApply();
            }}
          />
        </div>
      )}

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filter for Large Devices */}
        <div className="hidden md:block md:w-64 sticky top-8 h-fit">
          <ProductFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>

        {/* Product Grid Section */}
        <div className="flex-1">
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default Products;

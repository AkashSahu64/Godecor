import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, Leaf } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="bg-green-600 text-white text-center py-1 text-sm">
        🌿 Sale is Live! Get 20% off on all products
      </div>
      
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            {/*<Leaf className="h-8 w-8 text-green-600" />*/}
            <span className="w-20 h-20 mt-6"><img src="https://thegodecor.com/wp-content/uploads/2021/03/Godecor_Logo_Final-e1614679713868.png.webp" alt="" /></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <Search className="h-6 w-6" />
            </button>
            <Link to="/cart">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/login" className="btn-primary">
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md">
            <div className="flex flex-col p-4 space-y-4">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/login" className="btn-primary text-center">Login</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
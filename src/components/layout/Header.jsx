import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showSaleBanner, setShowSaleBanner] = useState(true);

  const handleMenuClick = () => {
    setIsMenuOpen(false); // Close menu when link is clicked
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      {/* Sale Banner */}
      {showSaleBanner && (
        <div className="bg-green-600 text-white py-2 md:py-4 px-2 md:px-4 text-sm md:text-xl flex flex-wrap md:flex-nowrap justify-between items-center z-10 relative">
          <div className="hidden md:flex flex-1"></div>
          <p className="flex-1 text-center text-xs sm:text-sm md:text-base lg:text-lg">🌿 Sale is Live! Get min 30% off on all products</p>
          <button
            onClick={() => setShowSaleBanner(false)}
            className="flex-1 flex justify-end hover:text-gray-200"
          >
            <X size={22} className="hidden md:inline" />
            <X size={18} className="md:hidden" />
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="w-16 h-16">
              <img
                src="https://thegodecor.com/wp-content/uploads/2021/03/Godecor_Logo_Final-e1614679713868.png.webp"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="nav-link text-base font-medium">Home</Link>
            <Link to="/products" className="nav-link text-base font-medium">Products</Link>
            <Link to="/about" className="nav-link text-base font-medium">About Us</Link>
            <Link to="/contact" className="nav-link text-base font-medium">Contact</Link>
          </div>

          {/* Actions (Search, Cart, Login) */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="hover:text-gray-500"
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Cart Button */}
            <Link to="/cart" className="hover:text-gray-500">
              <ShoppingCart className="h-5 w-5" />
            </Link>

            {/* Login Button */}
            <Link to="/login" className="btn-primary text-base px-3 py-1.5 hidden md:block">
              Login
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Search Bar*/}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-3 shadow-md">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-[5rem] right-0 w-2/3 bg-white shadow-md transition-transform transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-3 space-y-3">
            <Link to="/" className="nav-link text-base" onClick={handleMenuClick}>Home</Link>
            <Link to="/products" className="nav-link text-base" onClick={handleMenuClick}>Products</Link>
            <Link to="/about" className="nav-link text-base" onClick={handleMenuClick}>About Us</Link>
            <Link to="/contact" className="nav-link text-base" onClick={handleMenuClick}>Contact</Link>
            <Link to="/login" className="btn-primary text-center text-base" onClick={handleMenuClick}>
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

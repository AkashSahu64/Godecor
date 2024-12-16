import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube, Linkedin, ShoppingBag } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4"><Link to="/" className="flex items-center">
              <span className="w-16 h-16">
                <img
                  src="https://thegodecor.com/wp-content/uploads/2021/03/Godecor_Logo_Final-e1614679713868.png.webp"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </span>
            </Link>
            </h3>
            <p className="mb-4">Bringing nature indoors with our premium artificial plants.</p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/www.thegodecor?mibextid=JRoKGi" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <Facebook size={20} />
              </a>

              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Twitter size={20} /></a>
              <a href="https://www.instagram.com/godecor_official/?igsh=Z3I0Zzd4MzcwanU%3D#" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@godecor2868" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Youtube size={20} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin size={20} /></a>
              <a href="https://www.flipkart.com/home-decor/godecor~brand/pr?sid=arb" target="_blank" rel="noopener noreferrer" className="hover:text-white"><ShoppingBag size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/products" className="hover:text-white">Products</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="hover:text-white">Shipping Policy</Link></li>
              <li><Link to="/returns" className="hover:text-white">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+91 9716584915, +91 9625643745</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>admin@thegodecor.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>475A, H-Block, Phase-6, Aya Nagar, New Delhi-47</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Godecor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

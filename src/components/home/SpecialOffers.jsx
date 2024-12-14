import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Truck, Gift, Sparkles } from 'lucide-react';
import CountdownTimer from '../shared/CountdownTimer';

const SpecialOffers = () => {
  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-8 text-center">Special Offers</h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Flash Sale */}
        <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-xl text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-6 h-6" />
              <h3 className="text-xl font-bold">Flash Sale</h3>
            </div>
            <Timer className="w-6 h-6" />
          </div>
          <p className="text-lg mb-4">Get 30% off on all products!</p>
          <CountdownTimer targetDate={new Date().setDate(new Date().getDate() + 2)} />
        </div>

        {/* Free Shipping */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
          <div className="flex items-center space-x-2">
            <Truck className="w-6 h-6" />
            <h3 className="text-xl font-bold">Free Shipping</h3>
          </div>
          <p className="text-lg mt-2">On all orders over all India</p>
        </div>

        {/* Gift Card */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
          <div className="flex items-center space-x-2">
            <Gift className="w-6 h-6" />
            <h3 className="text-xl font-bold">Gift Card Special</h3>
          </div>
          <p className="text-lg mt-2">Buy a ₹500 gift card, get ₹20 extra free!</p>
        </div>
      </motion.div>
    </section>
  );
};

export default SpecialOffers;
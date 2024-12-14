import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ghosia Bazar',
    profileImage: '',
    rating: 5,
    comment: 'Too good....if size should have been much bigger than it would be perfect , but still worth buying.',
    date: 'March 15, 2022',
    productImage: 'https://rukminim2.flixcart.com/image/612/612/xif0q/artificial-plant/d/c/t/26-yes-wild-artificial-plat-with-boat-pot-godecor-original-imah5zc5wraqcvqf.jpeg?q=70',
    productLink: 'https://www.flipkart.com/godecor-bonsai-wild-artificial-plant-pot/p/itm9ac85b1eab2f5?pid=ARPFVZYZH4NFRZH7&lid=LSTARPFVZYZH4NFRZH79TLKYS&marketplace=FLIPKART&store=arb&srno=b_1_2&otracker=browse&fm=organic&iid=5883170b-bfda-4f06-bfad-88ef79127466.ARPFVZYZH4NFRZH7.SEARCH&ppt=browse&ppn=browse&ssid=rz09a7bej40000001734143880463',
  },
  {
    id: 2,
    name: 'Erode',
    profileImage: '',
    rating: 5,
    comment: 'Great quality and fast shipping. Highly recommended!, Nice 🙂✨👌',
    date: 'March 14, 2022',
    productImage: 'https://rukminim2.flixcart.com/image/612/612/knw2v0w0/artificial-plant/k/9/p/wild-artificial-plat-with-boat-pot-godecor-original-imag2h8xxmr2avaf.jpeg?q=70',
    productLink: 'https://www.flipkart.com/godecor-bonsai-wild-artificial-plant-pot/p/itm07e4aca1db0b7?pid=ARPG2R4ZH4GS3YNJ&lid=LSTARPG2R4ZH4GS3YNJSHD5YL&marketplace=FLIPKART&store=arb&srno=b_1_5&otracker=browse&fm=organic&iid=5883170b-bfda-4f06-bfad-88ef79127466.ARPG2R4ZH4GS3YNJ.SEARCH&ppt=browse&ppn=browse&ssid=rz09a7bej40000001734143880463',
  },
  {
    id: 3,
    name: 'Sarah Wilson',
    profileImage: '',
    rating: 5,
    comment: 'Perfect for my apartment! No maintenance required and looks beautiful.',
    date: 'Feb 26, 2021',
    productImage: 'https://rukminim2.flixcart.com/image/612/612/ku8pbbk0/artificial-flower/i/j/o/1-afl107-godecor-original-imag7esygzfdrn8t.jpeg?q=70',
    productLink: 'https://www.flipkart.com/home-decor/artificial-flowers-plants/pr?sid=1m7,76z',
  },
  {
    id: 4,
    name: 'David Chen',
    profileImage: '',
    rating: 5,
    comment: 'Excellent customer service and the plants look incredibly real!',
    date: 'Jan 12, 2023',
    productImage: 'https://rukminim2.flixcart.com/image/612/612/kyg5zm80/artificial-plant/o/d/l/18-yes-multicolor-godecor-original-imagazp9h8yhndhe.jpeg?q=70',
    productLink: 'https://www.flipkart.com/home-decor/artificial-flowers-plants/pr?sid=1m7,76z',
  },
];

const Testimonials = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <section className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl lg:text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleTestimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-green-50 rounded-xl p-6 hover:shadow-lg transition-shadow flex flex-col space-y-4"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700">
                {testimonial.profileImage ? (
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                ) : (
                  testimonial.name.charAt(0)
                )}
              </div>
              <div className="flex-2">
                <p className="font-semibold text-gray-800 flex items-center">
                  {testimonial.name}
                  <span className="flex ml-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current ml-1" />
                    ))}
                  </span>
                </p>
                <p className="text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </div>
            <div className="flex">
              <a
                href={testimonial.productLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group w-1/3"
              >
                <img
                  src={testimonial.productImage}
                  alt="Customer's Plant"
                  className="w-full h-24 object-cover rounded-lg group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                  <ExternalLink className="w-5 h-5 text-white" />
                </div>
              </a>
              <p className="ml-4 text-gray-700 italic flex-1">{testimonial.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={toggleShowAll}
          className="px-4 py-2 bg-green-500 text-white rounded-3xl hover:bg-green-600 transition"
        >
          {showAll ? 'See Less' : 'See More'}
        </button>
      </div>
    </section>
  );
};

export default Testimonials;

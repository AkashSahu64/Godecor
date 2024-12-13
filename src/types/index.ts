export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  productImage: string;
}
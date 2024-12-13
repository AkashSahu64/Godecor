interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '10 Creative Ways to Display Artificial Plants',
    excerpt: 'Discover innovative ways to incorporate artificial plants into your home decor...',
    image: 'https://images.unsplash.com/photo-1545165375-1b744b9ed444'
  },
  {
    id: '2',
    title: 'The Benefits of Artificial Plants in the Workplace',
    excerpt: 'Learn how artificial plants can improve your office environment...',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36'
  },
  {
    id: '3',
    title: 'Maintaining Your Artificial Plants',
    excerpt: 'Simple tips to keep your artificial plants looking fresh and beautiful...',
    image: 'https://images.unsplash.com/photo-1517497869-39a5e582c76b'
  }
];
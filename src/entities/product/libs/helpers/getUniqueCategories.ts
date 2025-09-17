import { products } from '@/mockData/products';

export const getUniqueCategories = () => {
  const uniqueNames = Array.from(
    new Set(products.map(p => p.category))
  );

  return uniqueNames.map(name => ({
    id: name,
    name: name.charAt(0).toUpperCase() + name.slice(1), 
    href: `products?categories=${encodeURIComponent(name)}`,
  }));
};


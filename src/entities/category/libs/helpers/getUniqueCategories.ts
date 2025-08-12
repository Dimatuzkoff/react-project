import { products } from '@/mockData/products';

export const getUniqueCategories = () => {
  const unique = Array.from(new Set(products.map(p => p.category)));
  return unique.map(name => ({
    id: name,
    name: name.charAt(0).toUpperCase() + name.slice(1),
  }));
};

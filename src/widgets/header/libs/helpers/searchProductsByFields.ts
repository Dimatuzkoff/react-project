import { products } from '@/mockData/products'

export const searchProductsByFields = (params: string) => {
  const text = params.toLowerCase();

  return products.filter(p => 
    p.brand?.toLowerCase().includes(text) ||
    p.category.toLowerCase().includes(text) || 
    p.title.toLowerCase().includes(text) || 
    p.tags.some(tag => tag.toLowerCase().includes(text))
  );
};

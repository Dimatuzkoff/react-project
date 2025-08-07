import type { Product } from '@/entities/product/model/types/product';

export const getProductBySlug = (
  products: Product[],
  slug: string
): Product | undefined => {
  return products.find(p => p.slug === slug);
};

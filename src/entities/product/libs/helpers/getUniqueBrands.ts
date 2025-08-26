import { products } from '@/mockData/products';

export const getUniqueBrands = (): string[] =>
  Array.from(new Set(products.map(p => p.brand).filter(Boolean))) as string[];

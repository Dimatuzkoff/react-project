// entities/product/model/types/productState.ts
import type { Product } from './product';
export interface ProductStateType {
  products: Product[];
  filteredProducts: Product[];
  filters: { category: string[] };
  sort: {
    price: 'asc' | 'desc' | '';
    alpha: 'asc' | 'desc' | '';
  };
}

import type { Product } from '@/entities/product/model/types/product';

export interface CartProduct
    extends Pick<Product, 'id' | 'title' | 'price' | 'thumbnail'> {
    quantity: number;
}

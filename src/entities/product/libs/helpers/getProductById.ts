import type { Product } from '@/entities/product/model/types/product';

export function getProductById(
    products: Product[],
    id: string | number
): Product | undefined {
    return products.find(p => p.id === Number(id));
}

import { type Product } from '@/entities/product/model/types/product';

export type SmartPickStateType = {
    smartPick: Product[];
    viewedProducts: Product[];
};

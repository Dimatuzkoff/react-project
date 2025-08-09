// redux
import { useSelector } from "react-redux";
import { getViewedProductsState } from '@/entities/smartPick/model/selectors/smartPickSelectors'
// type
import { type Product } from '@/entities/product/model/types/product';
// helpers
import { getAmountPreferProducts } from '@/entities/smartPick/libs/helpers/getAmountPreferProducts';

export const useSmartPick = () => {
    const viewedProducts: Product[]  = useSelector(getViewedProductsState);
    const amountPreferProducts = getAmountPreferProducts(viewedProducts.length);

console.log('Amount of Preferred Products:', amountPreferProducts);

}

// redux
import { useSelector } from "react-redux";
import { getViewedProductsState } from '@/entities/smartPick/model/selectors/smartPickSelectors'
// type
import { type Product } from '@/entities/product/model/types/product';
// helpers
import { getAmountPreferProducts } from '@/entities/smartPick/libs/helpers/getAmountPreferProducts';
import { useProductsByCategory } from '@/entities/smartPick/libs/hooks/useProductsByCategory'

export const useSmartPick = async () => {
    const viewedProducts: Product[]  = useSelector(getViewedProductsState);
    const amountPreferProducts = getAmountPreferProducts(viewedProducts.length);
    const productsByCategoryHook = useProductsByCategory();
    if ( !amountPreferProducts ) return
    for (const category of amountPreferProducts) {
        const currentCategoryProducts = await productsByCategoryHook(category);
        
        console.log('Товары для одной категории:', currentCategoryProducts);
        
    }
console.log('Расчет по просмотренным категори:', amountPreferProducts);

}

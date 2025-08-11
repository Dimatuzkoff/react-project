// redux
import { useSelector } from "react-redux";
import { getViewedProductsState } from '@/entities/smartPick/model/selectors/smartPickSelectors'
// hooks
// import { useAddToSmartPick } from '@/entities/smartPick/libs/hooks/smartPickActions'
// type
import { type Product } from '@/entities/product/model/types/product';
// helpers
import { getAmountPreferProducts } from '@/entities/smartPick/libs/helpers/getAmountPreferProducts';
import { useProductsByCategory } from '@/entities/smartPick/libs/hooks/useProductsByCategory'

export const useSmartPick = async () => {
    const viewedProducts: Product[]  = useSelector(getViewedProductsState);
    const amountPreferProducts = getAmountPreferProducts(viewedProducts.length);
    const productsByCategory = useProductsByCategory();
    // const addToSmartPick = useAddToSmartPick();
    if ( !amountPreferProducts ) return
    const smartPick =[];
    for (const category of amountPreferProducts) {
        const currentCategoryProducts = await productsByCategory(category);
        smartPick.push(...currentCategoryProducts);
        console.log('Товары для одной категории:', currentCategoryProducts);
        
    }
    if (smartPick.length ===0 ) return  
    // for (const product of smartPick) {
    //     addToSmartPick(product);
    // }

    console.log('СмартПик:', smartPick);
console.log('Расчет по просмотренным категори:', amountPreferProducts);
}

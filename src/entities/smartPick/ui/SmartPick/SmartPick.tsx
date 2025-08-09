// redux
import { useSelector } from "react-redux";
import { getViewedProductsState } from '@/entities/smartPick/model/selectors/smartPickSelectors'
// types
import { type Product } from '@/entities/product/model/types/product';

export const SmartPick = () => {
    const viewedProducts: Product[]  = useSelector(getViewedProductsState);
    console.log('Viewed Products:', viewedProducts);
    
    return (
        <>
            <h1>Smart Pick</h1>
        </>
    )
}
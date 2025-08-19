import { useSelector } from "react-redux";
import { getViewedProductsCategories } from '@/features/smartPick/model/selectors/smartPickSelectors';
import { MAX_SMART_PICK_PRODUCTS } from '@/features/smartPick/libs/constants/smartPick';

export const useGetAmountPreferProducts = (total: number) => {
    const viewedProductsCategories = useSelector(getViewedProductsCategories);
    if (!total) return
    return Object.keys(viewedProductsCategories).map((category) => ({
        name: category,
        amount: viewedProductsCategories[category],
        products: Math.round((viewedProductsCategories[category] / total) * MAX_SMART_PICK_PRODUCTS)
    }));
};

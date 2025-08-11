import { useSelector } from "react-redux";
import { getViewedProductsCategories } from '@/entities/smartPick/model/selectors/smartPickSelectors';
import { MAX_SMART_PICK_PRODUCTS } from '@/entities/smartPick/libs/constants/smartPick';

export const getAmountPreferProducts = (total: number) => {
    const viewedProductsCategories = useSelector(getViewedProductsCategories);

    if (!total) return

    return Object.keys(viewedProductsCategories).map((category) => ({
        name: category,
        amount: viewedProductsCategories[category],
        products: Math.round((viewedProductsCategories[category] / total) * MAX_SMART_PICK_PRODUCTS)
    }));
};

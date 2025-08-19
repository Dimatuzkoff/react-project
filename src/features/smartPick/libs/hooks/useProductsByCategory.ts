// hook
import { useUserProductsId } from '@/features/smartPick/libs/hooks/useUserProductsId'
// helpers
import { smartPickRandomIndex } from '@/features/smartPick/libs/helpers/smartPickRandomIndex'
// data
import { products } from '@/mockData/products'

interface ICategory {
    name: string,
    amount: number,
    products: number
}

export const useProductsByCategory = () => {
    const userProductsId = useUserProductsId();
    return async (category: ICategory) => {
        const filteredProducts = products.filter(product =>{
            if (!userProductsId.includes(product.id)) {
                return product.category === category.name;
            }
        });
        if ( category.products >= filteredProducts.length) {
            return filteredProducts;  
        } else {
            const randomIndexes = smartPickRandomIndex(filteredProducts.length, category.products);
            const randomProducts = randomIndexes.map(index => filteredProducts[index - 1]);        
            return randomProducts
        }
    };
}
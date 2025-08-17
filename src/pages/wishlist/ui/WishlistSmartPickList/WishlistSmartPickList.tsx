//react
import type { FC } from 'react';
// types
import { type Product } from '@/entities/product/model/types/product';
// ui
import { ProductList } from "@/entities/product/ui/ProductList/ProductList";
// styles
// import styles from './WishlistSmartPickList.module.scss';


interface WishlistSmartPickListProps {
    products: Product[];
}

export const WishlistSmartPickList: FC<WishlistSmartPickListProps> = ({products}) =>{
    return(
        <>
            {products.length > 0 && (
                <>
                    <h1>SMART PICK</h1>
                    <ProductList products={products} isShowWishList={false} />
                </>
            )}
        </>
    )
}

//react
import type { FC } from 'react';
// types
import { type Product } from '@/entities/product/model/types/product';
// ui
import { ProductList } from "@/entities/product/ui/ProductList/ProductList";
import { SectionTitle } from '@/shared/ui/SectionTitle';
// styles
import styles from './WishlistSmartPickList.module.scss';

interface WishlistSmartPickListProps {
    products: Product[];
}

export const WishlistSmartPickList: FC<WishlistSmartPickListProps> = ({products}) =>{
    return(
        <>
            <div className={styles.smartPick}>
                    <div className={styles.label}>
                        <SectionTitle title= "Для тебе"/>
                    </div>
                    <ProductList products={products} isShowWishList={false} />
            </div>  
        </>
    )
}

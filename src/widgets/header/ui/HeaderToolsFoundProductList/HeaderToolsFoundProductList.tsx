//react
import { type FC } from 'react';
// styles
import styles from './HeaderToolsFoundProductList.module.scss'
// types
import type { Product } from '@/entities/product/model/types/product';

interface HeaderToolsFoundProductListProps {
  foundProducts?: Product[]
}

export const HeaderToolsFoundProductList: FC<HeaderToolsFoundProductListProps> = ({
    foundProducts = []
}) => {
    return(
        <>
            <div className={styles.products}>
                {foundProducts.length > 0 ? (
                    foundProducts.map((product) => (
                        <div key={product.id} className={styles.dropdownItem}>
                            <span>{product.title}</span>
                            <span>{product.price} ₴</span>
                            </div>
                    ))) : (
                    <span>Нічого не знайдено :(</span>
                )}
            </div>
        </>
    )
}
//react
import { type FC } from 'react';
// styles
import styles from './HeaderToolsFoundProductList.module.scss'
// types
import type { Product } from '@/entities/product/model/types/product';

interface HeaderToolsFoundProductListProps {
  foundProducts?: Product[],
  onClick?: (slug: string) => void;
}

export const HeaderToolsFoundProductList: FC<HeaderToolsFoundProductListProps> = ({
    foundProducts = [],
    onClick
}) => {
    return(
        <>
            <div className={styles.products}>
                {foundProducts.length > 0 ? (
                    foundProducts.map((product) => (
                        <div onClick={() => onClick?.(product.slug)} key={product.id} className={styles.dropdownItem}>
                            <img src={product.images[0]} alt={product.slug} />
                            <span>{product.title}</span>
                        </div>
                    ))) : (
                    <span>Нічого не знайдено :(</span>
                )}
            </div>
        </>
    )
}
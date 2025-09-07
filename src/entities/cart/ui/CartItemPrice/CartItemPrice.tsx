// react
import type { FC } from 'react';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// styles
import styles from './CartItemPrice.module.scss'
// utils
import { cartFormatPrice } from '@/entities/cart/libs/utils/cartFormatPrice';

interface CartItemPriceProps {
  item: CartProduct
}
export const CartItemPrice: FC<CartItemPriceProps> = ({item}) => {

    const discont = item.promocodeDiscount ? item.price*(item.promocodeDiscount/100) : null
    const priceFormatted = discont ?  cartFormatPrice(item.price - discont) : cartFormatPrice(item.price)
    return(
        <>
            { discont && <span className={styles.priceBlock}>
                <span className={styles.currentPrice}> { priceFormatted } </span>
                <span className={styles.oldPrice}>{item.price}</span> 
            </span> }
            { !discont && <span className={styles.price}> { priceFormatted } </span>

            }
        </>
    )
}
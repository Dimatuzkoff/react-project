// react
import type { FC } from 'react';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// styles
import styles from './CartItemPrice.module.scss'
// utils
import { cartFormatPrice } from '@/entities/cart/libs/utils/cartFormatPrice';

interface CartItemPriceProps {
  item: CartProduct,
  isSubtotal?: boolean,
}
export const CartItemPrice: FC<CartItemPriceProps> = ({item, isSubtotal = false}) => {

    const discont = item.promocodeDiscount ? item.price*(item.promocodeDiscount/100) : null
    const priceFormatted = discont ?  cartFormatPrice(item.price - discont) : cartFormatPrice(item.price)
    const subtotalPriceFormatted = discont ? cartFormatPrice((item.price - discont)*item.quantity) : cartFormatPrice(item.price*item.quantity)
    return(
        <>
            { !isSubtotal && discont && <span className={styles.priceBlock}>
                <span className={styles.currentPrice}> { priceFormatted } </span>
                <span className={styles.oldPrice}>{item.price}</span> 
            </span> }
            { !isSubtotal && !discont && <span className={styles.price}> { priceFormatted } </span>

            }
             { isSubtotal && discont && <span className={styles.priceBlock}>
                <span className={styles.currentPrice}> { subtotalPriceFormatted } </span>
                <span className={styles.oldPrice}>{item.price*item.quantity}</span> 
            </span> }
            { isSubtotal && !discont && <span className={styles.price}> { subtotalPriceFormatted } </span>

            }
        </>
    )
}
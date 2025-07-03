// react
import type { FC } from 'react';
// types
import type { CartProduct } from '../../model/types/cartProduct';
// components
import { CartItem } from '../CartItem/CartItem';
import { Button } from '@/shared/ui/Button';
// styles
import styles from './CartItemList.module.scss';

interface CartItemListProps {
    items: CartProduct[];
    onQuantityChange?: (id: number, qty: number) => void;
    onRemove?: (id: number) => void;
}

export const CartItemList: FC<CartItemListProps> = ({
    items,
    onQuantityChange,
    onRemove,
}) => {
    if (items.length === 0) {
        return <div>Ваша корзина порожня</div>;
    }

    return (
        <div className={styles.cartItemList}>
            <div className={styles.tables}>
                <div className={styles.header}>
                    <div className={styles.product}>Product</div>
                    <div className={styles.price}>Price</div>
                    <div className={styles.quantity}>Quantity</div>
                    <div className={styles.subtotal}>SubTotal</div>
                </div>

                {items.map(item => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onQuantityChange={onQuantityChange}
                        onRemove={onRemove}
                    />
                ))}
            </div>
            <div className={styles.actions}>
                <div className={styles.btnWrapper}>
                    <Button
                        children="Return To Shop"
                        uiColor="primary"
                        uiType="outline"
                    />
                </div>
                <div className={styles.btnWrapper}>
                    <Button
                        children="Update Cart"
                        uiColor="primary"
                        uiType="outline"
                    />
                </div>
            </div>
        </div>
    );
};

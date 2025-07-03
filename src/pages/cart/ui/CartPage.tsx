// react
import { useState } from 'react';
// types
import { products } from '@/mockData/products';
// components
import { CartItemList } from '@/entities/cart/ui/CartItemList';
import { CartTotal } from '@/entities/cart/ui/CartTotal';
import { CartCoupon } from '@/entities/cart/ui/CartCoupon/CartCoupon';
//styles
import styles from './CartPage.module.scss';
import clsx from 'clsx';

const mockItems = products
    .slice(0, 4)
    .map(({ id, title, price, thumbnail }) => ({
        id,
        title,
        price,
        quantity: 1, 
        thumbnail,
    }));
export const CartPage = () => {
    const [couponCode, setCouponCode] = useState('');

    const handleCouponChange = (value: string) => {
        setCouponCode(value);
    };

    const handleApplyCoupon = () => {
        console.log('Coupon applied:', couponCode);
    };
    const handleQuantityChange = (id: number, qty: number) => {
        console.log('Quantity changed:', id, qty);
    };

    const handleRemove = (id: number) => {
        console.log('Remove item:', id);
    };
    return (
        <>
            <section className={styles.wrapperCartPage}>
                <div className={clsx(styles.container, styles.cartPage)}>
                    <CartItemList
                        items={mockItems}
                        onQuantityChange={handleQuantityChange}
                        onRemove={handleRemove}
                    />
                    <div className={styles.cartFooter}>
                        <CartCoupon
                            couponCode={couponCode}
                            onCouponCodeChange={handleCouponChange}
                            onApplyCoupon={handleApplyCoupon}
                        />
                        <CartTotal subtotal={0} shipping={0} total={0} />
                    </div>
                </div>
            </section>
        </>
    );
};

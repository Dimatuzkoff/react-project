// react
import { useState, type FC } from 'react';
// components
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
// styles
import styles from './CartCoupon.module.scss';

interface CartCouponProps {
    onApplyCoupon: (value: string) => void;
    disabled?: boolean;
}

export const CartCoupon: FC<CartCouponProps> = ({
    onApplyCoupon,
    disabled = false,
}) => {
    console.log('render CartCoupon');

    const [couponCode, setCouponCode] = useState('');

    const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCouponCode(e.target.value);
    };

    const applyCoupon = () => {
        onApplyCoupon(couponCode);
        setCouponCode('');
    };
    return (
        <div className={styles.cartCoupon}>
            <div className={styles.inputWrapper}>
                <Input
                    placeholder="Промокод"
                    type="text"
                    uiType="outline"
                    value={couponCode}
                    onChange={onCodeChange}
                />
            </div>
            <Button
                onClick={applyCoupon}
                uiColor="danger"
                disabled={disabled}
            >
                Застосувати промокод
            </Button>
        </div>
    );
};

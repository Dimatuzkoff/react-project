// react
import type { FC } from 'react';
// components
import { Input } from '@/shared/ui/input';
import { Button } from '@/shared/ui/Button';
// styles
import styles from './CartCoupon.module.scss';

interface CartCouponProps {
    couponCode: string;
    onCouponCodeChange: (value: string) => void;
    onApplyCoupon: () => void;
    disabled?: boolean;
}

export const CartCoupon: FC<CartCouponProps> = ({
    couponCode,
    onCouponCodeChange,
    onApplyCoupon,
    disabled = false,
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onCouponCodeChange(e.target.value);
  };
    return (
        <div className={styles.cartCoupon}>
            <div className={styles.inputWrapper}>
                <Input
                    placeholder="Coupon Code"
                    type="text"
                    uiType="outline"
                    value={couponCode}
                    onChange={handleChange}
                />
            </div>
            <Button
                onClick={onApplyCoupon}
                uiColor="danger"
                disabled={disabled}
            >
                Apply Coupon
            </Button>
        </div>
    );
};

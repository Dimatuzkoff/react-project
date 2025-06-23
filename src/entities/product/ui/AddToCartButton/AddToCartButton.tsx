import type { FC } from 'react';
// components
import { Button } from '@/shared/ui/Button';
// assets
import CartIcon from '@/shared/libs/assets/svg/icons/cart.svg';
// libs
import clsx from 'clsx';
// styles
import styles from './AddToCartButton.module.scss';

interface Props {
    variant: string;
    className?: string;
}

export const AddToCartButton: FC<Props> = ({ variant, className }) => {
    const showHoverButton = variant === 'default' || variant === 'explore';
    const showCartIcon = variant === 'wishList' || variant === 'justForYou';

    if (variant === 'bestSeller') {
        return null;
    }

    return (
        <div
            className={clsx(
                styles.buttonWrapper,
                showHoverButton && className,
                className
            )}
        >
            <Button
                children="Add to cart"
                uiColor="primary"
                leftIcon={
                    showCartIcon ? (
                        <img
                            src={CartIcon}
                            alt="cart"
                            className={styles.iconCart}
                        />
                    ) : undefined
                }
            />
        </div>
    );
};

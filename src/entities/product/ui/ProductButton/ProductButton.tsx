// react
import type { FC } from 'react';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { cartActionCreators } from '@/entities/cart/model/actionCreators/cartActionCreators';
import { getCartState } from '@/entities/cart/model/selectors/cartSelectors';
// hooks
import { useAddToProductStory } from '@/features/smartPick/libs/hooks/smartPickActionsHooks'
import { useToastNotification } from '@/shared/libs/hooks/useToastNotification'
// types
import type { Product } from '@/entities/product/model/types/product';
// components
import { Button } from '@/shared/ui/Button';
import { ToastNotification } from '@/shared/ui/toastNotification'
// assets
import CartIcon from '@/shared/libs/assets/svg/icons/cart.svg';
// libs
import clsx from 'clsx';
// styles
import styles from './ProductButton.module.scss';

interface Props {
    variant: string;
    className?: string;
    product: Product;
}

export const ProductButton: FC<Props> = ({ variant, className, product }) => {
    const { addToast } = useToastNotification()
    const dispatch = useDispatch();
    const addToProductStory = useAddToProductStory(product);
    const { cart } = useSelector(getCartState);
    const isInCart = cart.some(p => p.id === product.id);

    const showHoverButton = variant === 'default' || variant === 'explore';
    const showCartIcon = variant === 'wishList' || variant === 'justForYou';

    if (variant === 'bestSeller') {
        return null;
    }

    const addToCart = () => {
        dispatch(
            cartActionCreators.addProductToCart({
                ...product,
                quantity: 1,
            })
        );
        addToProductStory();
        console.log('Товар додано');
        addToast('Товар доданий до кошика', "success")
        
    };

    return (
        <div
            className={clsx(
                styles.buttonWrapper,
                showHoverButton && className,
                className
            )}
        >
            <Button
                children={isInCart ? 'In cart' : 'Add to cart'}
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
                onClick={addToCart}
            />
        </div>
    );
};

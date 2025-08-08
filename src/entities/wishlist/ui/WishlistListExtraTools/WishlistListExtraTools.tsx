// react
import type { FC } from 'react';
// styles
import styles from './WishlistListExtraTools.module.scss';
// ui
import { Button } from '@/shared/ui/Button';

interface WishlistListExtraToolsProps {
    wishlistLength?: number;
}

export const WishlistListExtraTools: FC<WishlistListExtraToolsProps> = ({
    wishlistLength = 0,
}) => {
    return (
        <>
            { wishlistLength > 0 && (
                <div className={styles.extraTools}>
                    <span className={styles.amountItems}>Список бажань ({wishlistLength})</span>
                        <Button uiColor='primary' uiType='outline'>
                            <span>Усе у кошик!</span>
                        </Button>
                </div>
            )}
        </>
    )
}
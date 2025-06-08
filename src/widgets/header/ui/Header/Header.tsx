//react
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
//styles
import styles from './Header.module.scss';
//ui
import { HeaderTools } from '../HeaderTools/HeaderTools';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
//constants
import { getHomeRoute } from '@/shared/libs/constants/routes/routes';

interface HeaderProps {
    [key: string]: unknown;
}

export const Header: FC<HeaderProps> = ({}) => {
    console.log('render Header');

    return (
        <>
            <section className={styles.wrapperHeader}>
                <div className={styles.discountOffer}>
                    <p>
                        Літній розпродаж на всі купальники та безкоштовна
                        експрес-доставка - ЗНИЖКА 50%!
                    </p>
                </div>
                <div className={styles.header}>
                    <NavLink to={getHomeRoute()}>
                        <h1>Exclusive</h1>
                    </NavLink>
                    <div className={styles.headerMenuDesktop}>
                        <HeaderNavigation />
                    </div>
                    <HeaderTools />
                </div>
                <div className={styles.headerMenuMobile}>
                    <HeaderNavigation />
                </div>
            </section>
        </>
    );
};

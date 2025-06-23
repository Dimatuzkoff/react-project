// react
import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// helpers
import { getBreadcrumbs } from '../libs/helpers/getBreadcrumbs';
// styles
import styles from './Breadcrumbs.module.scss';
// libs
import clsx from 'clsx';

export const Breadcrumbs: FC = () => {
    const { pathname } = useLocation();
    const crumbs = getBreadcrumbs(pathname);

    if (pathname === '/') return null;

    return (
        <nav className={styles.breadcrumbs}>
            {crumbs.map((crumb, i) => (
                <span key={crumb.path}>
                    <NavLink
                        to={crumb.path}
                        className={({ isActive }) =>
                            clsx(styles.link, { [styles.active]: isActive })
                        }
                    >
                        {crumb.label}
                    </NavLink>
                    {i < crumbs.length - 1 && (
                        <span className={styles.separator}> / </span>
                    )}
                </span>
            ))}
        </nav>
    );
};

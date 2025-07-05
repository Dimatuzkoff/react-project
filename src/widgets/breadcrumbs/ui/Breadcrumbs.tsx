// react
import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
// redux
import { useSelector } from 'react-redux';
// types
import type { Breadcrumb } from '../model/types/breadcrumbTypes';
// selectors
import { getBreadcrumbs } from '../model/selectors/breadrumbSelectors';
// styles
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs: FC = () => {
    const breadcrumbs: Breadcrumb[] = useSelector(getBreadcrumbs);

    if (!breadcrumbs.length) return null;

    return (
        <nav className={styles.breadcrumbs}>
            {breadcrumbs.map((crumb, index) => (
                <span key={crumb.path ?? index}>
                    {crumb.path ? (
                        <NavLink to={crumb.path} className={styles.link}>
                            {crumb.label}
                        </NavLink>
                    ) : (
                        <span className={styles.link}>{crumb.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && (
                        <span className={styles.separator}> / </span>
                    )}
                </span>
            ))}
        </nav>
    );
};

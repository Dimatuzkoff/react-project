// react
import type { FC } from 'react';
import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
// reduser
import { setBreadcrumbs } from '../model/actionCreators/breadcrumbsActionCreators';
// types
import type { Breadcrumb } from '../model/types/Breadcrumb';
import type { StateSchema } from '@/app/config/store/stateSchema';
// styles
import styles from './Breadcrumbs.module.scss';

export const Breadcrumbs: FC = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const breadcrumbs: Breadcrumb[] = useSelector(
        (state: StateSchema) => state.breadcrumbs
    );

    useEffect(() => {
        const segments = location.pathname.split('/').filter(Boolean);

        const crumbs = segments.map((segment, index) => ({
            label: decodeURIComponent(segment),
            path: '/' + segments.slice(0, index + 1).join('/'),
        }));

        dispatch(setBreadcrumbs(location.pathname === '/' ? [] : crumbs));
    }, [location.pathname, dispatch]);

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

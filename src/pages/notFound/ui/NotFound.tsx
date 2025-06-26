// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
//styles
import styles from './NotFound.module.scss';
export const NotFound = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: '404', path: '/404' },
            ])
        );
    })
    return (
        <>
            <section className={styles.wrapperNotFound}>
                <h1>404</h1>
            </section>
        </>
    );
};

// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
export const ProductPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Product', path: '/product' },
            ])
        );
    })
    return (
        <div>
            <h1>ProductPage</h1>
        </div>
    );
};

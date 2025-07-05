// react
import { useDispatch } from 'react-redux';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
export const ProductPage = () => {
    const dispatch = useDispatch();

    dispatch(
        setBreadcrumbs([{ label: 'Продукт', path: routeConfig.productById }])
    );
    return (
        <div>
            <h1>ProductPage</h1>
        </div>
    );
};

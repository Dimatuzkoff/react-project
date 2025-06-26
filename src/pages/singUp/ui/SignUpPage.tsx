// react
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// reduser
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbsActionCreators';
export const SignUpPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            setBreadcrumbs([
                { label: 'Sign Up', path: '/signup' },
            ])
        );
    })
    return (
        <div>
            <h1>SignUpPage</h1>
        </div>
    );
};

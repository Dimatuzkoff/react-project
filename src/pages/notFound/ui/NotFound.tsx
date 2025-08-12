// react
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// constants
import { routeConfig } from '@/app/config/route/routeConfig';
// reducer
import { setBreadcrumbs } from '@/widgets/breadcrumbs/model/actionCreators/breadcrumbActionCreators';
// components
import { Button } from '@/shared/ui/Button';
// helpers
import { getHomeRoute } from '@/shared/libs/constants/routes/routes';
//styles
import styles from './NotFound.module.scss';
export const NotFound = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const goHome = () => {
        navigate(getHomeRoute());
    };

    useEffect(() => {
        dispatch(setBreadcrumbs([{ label: '404', path: routeConfig.notFound }]));
    }, [dispatch]);
    
    return (
      <>
        <section className={styles.wrapperNotFound}>
          <h1 className={styles.title}>404 Not Found</h1>
          <p className={styles.text}>
            Your visited page not found. You may go home page.
          </p>
          <div className={styles.btnWrapper}>
            <Button onClick={goHome} uiColor="danger">
              Back to home page
            </Button>
          </div>
        </section>
      </>
    );
};

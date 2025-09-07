// react
import { useNavigate } from 'react-router-dom';
// components
import { Button } from '@/shared/ui/Button';
// constants 
import { getHomeRoute } from '@/shared/libs/constants/routes/routes';
import { promocodes } from '@/mockData/promocodes'
// styles
import styles from './CartActions.module.scss';

export const CartActions = () => {
    const navigate = useNavigate();
    const goHome = () => navigate(getHomeRoute());
    const getPomocode = () => alert(JSON.stringify(promocodes))
      
    return (
        <div className={styles.cartActions}>
            <div className={styles.btnWrapper}>
                <Button children="До магазину" uiColor="primary" uiType="outline" onClick={goHome}/>
            </div>
            <div className={styles.btnWrapper}>
                <Button children="Отримати промокод" uiColor="primary" uiType="outline" onClick={getPomocode}/>
            </div>
        </div>
    );
};

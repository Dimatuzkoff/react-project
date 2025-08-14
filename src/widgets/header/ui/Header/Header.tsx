//react
import { useState, type FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
//styles
import styles from './Header.module.scss';
//ui
import { HeaderTools } from '../HeaderTools/HeaderTools';
import { HeaderNavigation } from '../HeaderNavigation/HeaderNavigation';
import { CategoriesSidebarMobile } from '@/widgets/categoriesSidebar/ui/CategoriesSidebarMobile';
// assets
import Categories from '@/shared/libs/assets/svg/icons/categories.svg';
//constants
import { getHomeRoute } from '@/shared/libs/constants/routes/routes';

interface HeaderProps {
  [key: string]: unknown;
}

export const Header: FC<HeaderProps> = ({}) => {
  const location = useLocation();

  const isHomePage = location.pathname === getHomeRoute();

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  console.log('render Header');

  return (
    <>
      <section className={styles.wrapperHeader}>
        <div className={styles.discountOffer}>
          <p>
            Літній розпродаж на всі купальники та безкоштовна експрес-доставка -
            ЗНИЖКА 50%!
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
          {isHomePage && (
            <button
              onClick={() => setSidebarOpen(prev => !prev)}
              className={styles.categoryButton}
            >
              <img src={Categories} alt="categories" />
            </button>
          )}

          <CategoriesSidebarMobile
            isOpen={isSidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <div className={styles.headerNavigationMobile}>
            <HeaderNavigation />
          </div>
        </div>
      </section>
    </>
  );
};

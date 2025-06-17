//react
import { NavLink } from 'react-router-dom';
//helpers
import { scrollToTop } from '@/shared/libs/helpers/scrollToTop';
//styles
import styles from './Footer.module.scss';
//constants
import {
    getHomeRoute,
    getAccountRoute,
    getSignUpRoute,
    getCartRoute,
    getWishlistRoute,
    getContactRoute,
} from '@/shared/libs/constants/routes/routes';

export const Footer = ({}) => {
    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footer}>
                <div className={styles.brand}>
                    <h4>Exclusive</h4>
                    <span>Отримайте 10% знижки на ваше перше замовлення</span>
                </div>
                <div className={styles.support}>
                    <h5>Підтримка</h5>

                    <a
                        href="https://maps.google.com/?q=111+Bijoy+sarani,+Dhaka,+DH+1515,+Bangladesh"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Відкрити карту з адресою 111 Bijoy sarani, Dhaka, DH 1515, Bangladesh"
                    >
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh
                    </a>
                    <a
                        href="mailto:exclusive@gmail.com"
                        aria-label="Надіслати лист на exclusive@gmail.com"
                    >
                        exclusive@gmail.com
                    </a>
                    <a
                        href="tel:+88015888889999"
                        aria-label="Зателефонувати за номером +88015-88888-9999"
                    >
                        +88015-88888-9999
                    </a>
                </div>
                <nav className={styles.account}>
                    <h3>Обліковий запис</h3>
                    <ul>
                        <li>
                            <NavLink
                                to={getAccountRoute()}
                                onClick={scrollToTop}
                            >
                                Мій обліковий запис
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={getSignUpRoute()}
                                onClick={scrollToTop}
                            >
                                Вхід / Реєстрація
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={getCartRoute()} onClick={scrollToTop}>
                                Кошик
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={getWishlistRoute()}
                                onClick={scrollToTop}
                            >
                                Список бажань
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={getHomeRoute()} onClick={scrollToTop}>
                                Магазин
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <nav className={styles.quickLinks}>
                    <h3>Швидкі посилання</h3>
                    <ul>
                        <li>
                            <span>Політика конфіденційності</span>
                        </li>
                        <li>
                            <span>Умови використання</span>
                        </li>
                        <li>
                            <NavLink
                                to={getContactRoute()}
                                onClick={scrollToTop}
                            >
                                Контакти
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={styles.copyRight}>
                <p>
                    Copyright&nbsp;
                    <a
                        href="https://t.me/dariazhuravleva"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @dariazhuravleva
                    </a>
                    <span> & </span>
                    <a
                        href="https://t.me/DmitryTuzkoff"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @DmitryTuzkoff
                    </a>
                    &nbsp;2025. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

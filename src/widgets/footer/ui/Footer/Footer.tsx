//react
import type { FC } from 'react';
//styles
import styles from './Footer.module.scss';

interface FooterProps {
    [key: string]: unknown;
}

export const Footer: FC<FooterProps> = ({}) => {
    return (
        <section className={styles.footerWrapper}>
            <article className={styles.footer}>
                <div className={styles.brand}>
                    <h4>Exclusive</h4>
                    <h5>Subscribe</h5>
                    <span>Get 10% off your first order</span>
                </div>
                <div className={styles.support}>
                    <h5>Support</h5>
                    <span>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</span>
                    <span>exclusive@gmail.com</span>
                    <span>+88015-88888-9999</span>
                </div>
                <div className={styles.account}>
                    <h5> Account</h5>
                    <span>My Account</span>
                    <span>Login / Register</span>
                    <span>Cart</span>
                    <span>Wishlist</span>
                    <span>Shop</span>
                </div>
                <div className={styles.quickLink}>
                    <h5>Quick Link</h5>
                    <span>Privacy Policy</span>
                    <span>Terms Of Use</span>
                    <span>FAQ</span>
                    <span>Contact</span>
                </div>
            </article>
            <article className={styles.copyRight}>
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
            </article>
        </section>
    );
};

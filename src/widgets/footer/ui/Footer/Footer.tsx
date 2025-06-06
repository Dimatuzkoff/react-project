//react
import type { FC } from 'react';
//styles
import styles from './Footer.module.scss';

interface FooterProps {
    [key: string]: unknown;
}

export const Footer: FC<FooterProps> = ({}) => {
    return <div className={styles.footer}></div>;
};

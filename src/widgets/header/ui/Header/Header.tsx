//react
import type { FC } from 'react';
//styles
import styles from './Header.module.scss';

interface HeaderProps {
    [key: string]: unknown;
}

export const Header: FC<HeaderProps> = ({}) => {
    return <div className={styles.header}></div>;
};

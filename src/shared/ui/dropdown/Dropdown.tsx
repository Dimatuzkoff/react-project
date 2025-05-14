// styles
import styles from './Dropdown.module.scss';

interface DropdownProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}

export const Dropdown = ({ children, isOpen = true }: DropdownProps) => {
    return isOpen ? <div className={styles.dropdown}>{children}</div> : null;
};

// shared/ui/Drawer/ui/Drawer.tsx
import { type FC, type ReactNode } from 'react';
import clsx from 'clsx';
import styles from './Drawer.module.scss';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string; 
}

export const Drawer: FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  return (
    <>
      <div
        className={clsx(styles.overlay, { [styles.show]: isOpen })}
        onClick={onClose}
      />

      <div className={clsx(styles.drawer, { [styles.open]: isOpen })}>
          <div className={styles.header}>
            <button className={styles.closeButton} onClick={onClose}>
              ✕
            </button>
            <div className={styles.topLine} />
            {title && <h3 className={styles.title}>{title}</h3>}
          </div>

        <div className={styles.content}>{children}</div>
      </div>
    </>
  );
};

// react
import type { FC } from 'react';
// styles
import styles from './Sidebar.module.scss';

export interface SidebarItem {
  id: string | number;
  name: string;
  href: string;
}

interface SidebarProps {
  items?: SidebarItem[];
  children?: React.ReactNode;
}

export const Sidebar: FC<SidebarProps> = ({ items, children }) => {
  return (
    <aside className={styles.sidebar}>
      {items && (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      )}
      {children}
    </aside>
  );
};

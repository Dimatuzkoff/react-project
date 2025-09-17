// react
import type { FC } from 'react';
import { Link } from 'react-router-dom';
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
              <Link to={`/${item.href}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {children}
    </aside>
  );
};

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
  items: SidebarItem[];
}

export const Sidebar: FC<SidebarProps> = ({ items }) => {
  return (
    <aside className={styles.sidebar}>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

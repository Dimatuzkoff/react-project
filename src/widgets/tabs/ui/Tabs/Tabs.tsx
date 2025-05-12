// react
import type { FC } from 'react';
// styles
import styles from './Tabs.module.scss';
import { TabsArrows } from '../TabsArrows/TabsArrows';

interface TabsProps {}

export const Tabs: FC<TabsProps> = ({}) => {
    return (
        <div className={styles.Tabs}>
            <TabsArrows></TabsArrows>
        </div>
    );
};

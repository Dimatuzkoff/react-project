//libs
import clsx from 'clsx';
//ui
import { TabsItem } from '../TabsItem/TabsItem.tsx';
//styles
import styles from './TabsDropdownList.module.scss';
//types
import type { TabsDataType } from '../../model/types/tabsDataType.ts';

interface TabsDropdownListProps {
    onClick?: (value: string) => void;
    size: string;
    variant?: string;
    activeTab?: string;
    typeTabItems?: 'link' | 'button';
    options: TabsDataType[];
}

export const TabsDropdownList = ({
    onClick,
    size,
    variant,
    activeTab,
    typeTabItems,
    options,
}: TabsDropdownListProps) => {
    return (
        <>
            <div className={clsx(styles.dropdownOptionsWrapper)}>
                <ul>
                    {options.map(item => (
                        <TabsItem
                            key={item.label}
                            isHover
                            variant={variant}
                            typeTabItems={typeTabItems}
                            size={size}
                            option={item}
                            isActiveTab={activeTab === item.label}
                            onClick={onClick}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

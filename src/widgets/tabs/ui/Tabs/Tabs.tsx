//react
import { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
//hooks
import { useClickOutside } from '@/shared/libs/hooks/useClickOutside';
import { useContainerWidth } from '../../libs/hooks/useContainerWidth';
//helpers
import { getActiveTab } from '../../libs/helpers/getActiveTab.ts';
//libs
import clsx from 'clsx';
//ui
import { TabsToolIcon } from '../TabsToolIcon/TabsToolIcon';
import { TabsList } from '../TabsList/TabsList.tsx';
import { Dropdown } from '@/shared/ui/dropdown';
import { TabsDropdownList } from '../TabsDropdownList/TabsDropdownList.tsx';
//styles
import styles from './Tabs.module.scss';
//types
import type { TabsDataType } from '../../model/types/tabsDataType.ts';

interface TabProps {
    tabsData: TabsDataType[];
    variant?: 'underline' | 'underlineFilled';
    isDisabled?: boolean;
    typeTabItems?: 'link' | 'button';
    size?: '32' | '36' | '40';
    behavior?: 'scrollable' | 'arrows' | 'dropdown';
}

export const Tabs = ({
    tabsData,
    variant = 'underline',
    isDisabled,
    typeTabItems = 'link',
    size = '40',
    behavior = 'scrollable',
}: TabProps) => {
    const location = useLocation();

    const [isOpenDropdown, setIsOpenDropdown] = useState<boolean>(false);

    const [dropdownTabs, setDropdownTabs] = useState<TabsDataType[]>([]);

    const [activeTabState, setActiveTabState] = useState(tabsData[0].label);

    const activeTab = getActiveTab(
        typeTabItems,
        tabsData,
        location,
        activeTabState
    );

    const divClickOutsideRef = useRef<HTMLDivElement | null>(null);
    useClickOutside(divClickOutsideRef, () => setIsOpenDropdown(false));

    const containerRef = useRef<HTMLDivElement>(null);

    const wrapperNavRef = useRef<HTMLDivElement | null>(null);
    const widthWrapperNav = useContainerWidth(wrapperNavRef);

    const toggleDropdown = () => {
        setIsOpenDropdown(!isOpenDropdown);
    };

    const selectTab = (tab: string) => {
        if (typeTabItems === 'button') {
            setActiveTabState(tab);
            setIsOpenDropdown(false);
        }
    };

    const onControlClick = (position: string) => {
        if (position === 'right' && behavior === 'dropdown') {
            toggleDropdown();
        } else if (behavior === 'arrows') {
            const container = containerRef.current;
            if (!container) return;
            container.scrollBy({
                left: position === 'left' ? -50 : 50,
                behavior: 'smooth',
            });
        }
    };
    console.log('render tabs');

    return (
        <>
            <div ref={wrapperNavRef} className={clsx(styles.container)}>
                <div
                    className={clsx(styles.tabsWrapper, {
                        [styles.size32]: size === '32',
                        [styles.size36]: size === '36',
                        [styles.size40]: size === '40',
                    })}
                >
                    <TabsToolIcon
                        onClick={onControlClick}
                        position="left"
                        isDisabled={isDisabled}
                        isRotate
                        behavior={behavior}
                        size={size}
                    />
                    <TabsList
                        onClick={selectTab}
                        size={size}
                        variant={variant}
                        typeTabItems={typeTabItems}
                        behavior={behavior}
                        isDisabled={isDisabled}
                        options={tabsData}
                        activeTab={activeTab}
                        wrapperNavWidth={widthWrapperNav}
                        setDropdownTabs={setDropdownTabs}
                        scrollRef={containerRef}
                    />
                    <TabsToolIcon
                        onClick={onControlClick}
                        position="right"
                        behavior={behavior}
                        isDisabled={isDisabled}
                        size={size}
                        isOpenDropdown={isOpenDropdown}
                    />
                </div>
                {behavior === 'dropdown' && (
                    <span
                        ref={divClickOutsideRef}
                        className={clsx(styles.dropdownPosition)}
                    >
                        <Dropdown isOpen={isOpenDropdown}>
                            <TabsDropdownList
                                onClick={selectTab}
                                variant={variant}
                                activeTab={activeTab}
                                typeTabItems={typeTabItems}
                                size={size}
                                options={dropdownTabs}
                            />
                        </Dropdown>
                    </span>
                )}
                {typeTabItems !== 'link' && !isDisabled && (
                    <div className={clsx(styles.content)}>
                        activeTab {activeTab}
                    </div>
                )}
            </div>
        </>
    );
};

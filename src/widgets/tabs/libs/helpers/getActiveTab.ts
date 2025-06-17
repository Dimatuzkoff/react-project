//react
import { type Location } from 'react-router-dom';
//types
import { type TabsDataType } from '../../model/types/tabsDataType';
export const getActiveTab = (
    typeTabItems: string,
    tabsData: TabsDataType[],
    location: Location,
    activeTabState: string
) => {
    if (typeTabItems === 'link') {
        const tab = tabsData.find(tab => tab.path === location.pathname);
        return tab ? tab.label : '';
    }
    return activeTabState;
};

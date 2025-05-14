import type { ReactNode } from 'react';

export interface OptionType {
    label: string;
    icon?: ReactNode;
    [key: string]: any;
}

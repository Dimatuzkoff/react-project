// react
import type { FC, ReactNode } from 'react';
import { useState } from 'react';
// assets
import info from './../../assets/svg/icons/info.svg';
// styles
import styles from './Tooltip.module.scss';

interface TooltipProps {
    text: string;
    children?: ReactNode;
}

export const Tooltip: FC<TooltipProps> = ({ text }) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <span
            className={styles.tooltipWrapper}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            <img src={info} alt="info" className={styles.tooltipIcon} />
            {isVisible && (
                <div className={styles.tooltipContainer}>
                    <span className={styles.tooltip}>
                        <span className={styles.tooltipText}>{text}</span>
                    </span>
                    <span className={styles.tooltipArrow}></span>
                </div>
            )}
        </span>
    );
};

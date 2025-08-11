// hooks
import { useSmartPick } from '@/entities/smartPick/libs/hooks/useSmartPick';

export const SmartPick = () => {
    useSmartPick();
    console.log('SmartPick component rendered');
    
    return (
        <>
            <h1>Smart Pick</h1>
        </>
    )
}
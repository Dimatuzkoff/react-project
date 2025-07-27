//react
import { useFormContext } from 'react-hook-form';
import type { FC } from 'react';
//ui
import { Input } from '@/shared/ui/input';

interface AuthFormInputProps {
    helperText?: string;
    name: string;
    placeholder?: string;
    tooltipText?: string;
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    isError?: boolean;
}

export const AuthFormInput: FC<AuthFormInputProps> = ({ 
    name,
    placeholder,
    helperText,
    isError,
    type,  
}) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <Input
            isFullWidth
            size="32"
            {...register(name)}
            isError={isError || !!errors[name]}
            helperText={helperText || errors[name]?.message?.toString()}
            placeholder={placeholder}
            type={type}
        />
    );
};

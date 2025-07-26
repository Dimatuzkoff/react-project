import { useFormContext } from 'react-hook-form';
//ui
import { Input } from '@/shared/ui/input';
import type { FC } from 'react';

interface AuthFormInputProps {
    isFullWidth?: boolean;
    helperText?: string;
    name: string;
    size?: '24' | '32' | '36' | '40' | '44' | '48';
    placeholder?: string;
    tooltipText?: string;
    type: React.InputHTMLAttributes<HTMLInputElement>['type'];
    isError?: boolean;
}

export const AuthFormInput: FC<AuthFormInputProps> = ({ 
    name, 
    placeholder, 
    type, 
    size  }) => {
    const {
        register,
        formState: { errors },
    } = useFormContext();
    return (
        <Input
            isFullWidth
            {...register(name)}
            isError={!!errors[name]}
            helperText={errors[name]?.message?.toString()}
            placeholder={placeholder}
            type={type}
            size={size}
        />
    );
};

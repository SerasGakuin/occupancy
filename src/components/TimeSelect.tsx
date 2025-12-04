import React from 'react';
import { FormSelect } from './FormSelect';
import { CONFIG } from '@/lib/config';

interface TimeSelectProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
}

export const TimeSelect = ({ name, value, onChange, required }: TimeSelectProps) => {
    return (
        <FormSelect name={name} value={value} onChange={onChange} required={required}>
            {CONFIG.TIME_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </FormSelect>
    );
};

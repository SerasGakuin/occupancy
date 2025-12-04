import React, { useState } from 'react';
import { FormSelect } from './FormSelect';

interface DateSelectProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    required?: boolean;
}

export const DateSelect = ({ name, value, onChange, required }: DateSelectProps) => {
    const [options] = useState<{ value: string; label: string }[]>(() => {
        const opts = [];
        const today = new Date();
        const weekdays = ['日', '月', '火', '水', '木', '金', '土'];

        for (let i = 0; i < 14; i++) {
            const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
            const dayOfWeek = d.getDay();

            const yyyy = d.getFullYear();
            const mm = ('0' + (d.getMonth() + 1)).slice(-2);
            const dd = ('0' + d.getDate()).slice(-2);
            const w = weekdays[dayOfWeek];

            opts.push({
                value: `${yyyy}-${mm}-${dd}`,
                label: `${mm}/${dd}(${w})`,
            });
        }
        return opts;
    });

    return (
        <FormSelect name={name} value={value} onChange={onChange} required={required}>
            <option value="">日付を選択...</option>
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </FormSelect>
    );
};

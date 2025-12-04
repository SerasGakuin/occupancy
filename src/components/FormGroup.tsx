import React from 'react';

import styles from './FormGroup.module.css';

interface FormGroupProps {
    label: string;
    children: React.ReactNode;
}

export const FormGroup = ({ label, children }: FormGroupProps) => {
    return (
        <div className={styles.group}>
            <label className={styles.label}>{label}</label>
            {children}
        </div>
    );
};

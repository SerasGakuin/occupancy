'use client';

import React from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'meeting' | 'rest' | 'gradient-teal';
    href?: string;
}

export const Button = ({ children, variant = 'primary', className = '', href, ...props }: ButtonProps) => {
    const variantClass = variant ? styles[variant] : '';
    const combinedClassName = `${styles.base} ${variantClass} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClassName}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClassName} {...props}>
            {children}
        </button>
    );
};

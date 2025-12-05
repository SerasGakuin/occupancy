'use client';

import Link from 'next/link';
import styles from './BackLink.module.css';

interface BackLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

export const BackLink = ({ href, children, className = '', style }: BackLinkProps) => {
    return (
        <Link href={href} className={`${styles.link} ${className}`} style={style}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className={styles.icon}>
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            {children}
        </Link>
    );
};

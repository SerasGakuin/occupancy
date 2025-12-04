'use client';

import Link from 'next/link';
import styles from './PortalCard.module.css';

interface PortalCardProps {
    href: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const PortalCard = ({ href, title, description, icon }: PortalCardProps) => {
    return (
        <Link href={href} className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
        </Link>
    );
};

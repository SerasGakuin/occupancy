'use client';

import styles from './LoadingOverlay.module.css';

interface LoadingOverlayProps {
    visible?: boolean;
}

export const LoadingOverlay = ({ visible = true }: LoadingOverlayProps) => {
    return (
        <div className={`${styles.overlay} ${visible ? styles.visible : ''}`}>
            <div className={styles.spinner}></div>
        </div>
    );
};

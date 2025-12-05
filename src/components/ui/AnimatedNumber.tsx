'use client';

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
    value: number | undefined;
    duration?: number;
}

export const AnimatedNumber = ({ value, duration = 1000 }: AnimatedNumberProps) => {
    const [displayValue, setDisplayValue] = useState<number | null>(null);

    useEffect(() => {
        if (value === undefined) {
            // Do nothing if value is undefined. The render will handle it if we want to show '--'.
            // Or we can reset displayValue if we really want to support switching back to undefined.
            // But to avoid the lint error, let's just return.
            return;
        }

        let startTimestamp: number | null = null;
        // Start from 0 on first load, or current displayValue
        // If displayValue is null (first load), we start from 0.
        // If we want to animate from 0 every time value changes from undefined -> number, this works.
        const startValue = displayValue === null ? 0 : displayValue;
        const endValue = value;

        if (startValue === endValue) {
            if (displayValue === null) {
                setDisplayValue(endValue);
            }
            return;
        }

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // Ease out quart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = startValue + (endValue - startValue) * ease;

            setDisplayValue(current);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                setDisplayValue(endValue);
            }
        };

        window.requestAnimationFrame(step);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value, duration]); // Removed displayValue from deps

    if (value === undefined) {
        return <span>--</span>;
    }

    // If value is defined but displayValue is null (initial render before effect), show 0 or '--'?
    // Let's show 0 or '--'. If we want to animate from 0, showing 0 is better.
    // But if we want to show '--' until animation starts...
    if (displayValue === null) {
        return <span>--</span>;
    }

    return <span>{Math.round(displayValue)}</span>;
};

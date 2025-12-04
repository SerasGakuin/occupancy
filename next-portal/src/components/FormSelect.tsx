'use client';

import styles from './FormGroup.module.css';

// interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}
type FormSelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const FormSelect = (props: FormSelectProps) => {
    return (
        <select className={`${styles.input} ${styles.select}`} {...props}>
            {props.children}
        </select>
    );
};

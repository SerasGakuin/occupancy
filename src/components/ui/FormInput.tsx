'use client';

import styles from './FormGroup.module.css';

// interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
type FormInputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = (props: FormInputProps) => {
    return <input className={styles.input} {...props} />;
};

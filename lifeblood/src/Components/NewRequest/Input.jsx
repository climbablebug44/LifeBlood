import React from 'react';
import styles from './Input.module.css';

const Input = props => {

    return (
        <div className={styles['input-field']}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input {...props.input} required onChange={props.onChange} value={props.value} onBlur={props.onBlur} />
        </div>
    );
}

export default Input;
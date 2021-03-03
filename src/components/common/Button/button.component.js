import React from 'react';
import './button.component.css';

export const Button = (props) => {
    let enabledLable = props.enabledLable || 'submit';
    let disabledLable = props.disabledLable || 'submitting';
    let btn = props.isSubmitting
        ?  <button className = "submit-form" disabled>{disabledLable}</button>
        :  <button  disabled= {!props.isValidForm} type = "submit" className = "submit-form">{enabledLable}</button>
    return btn;
    
}
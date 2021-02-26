import React from 'react';
import "./FormErrorText.css"

function FormErrorText(props) {
    return (
        <div className={props.class}>{props.text}</div>
    )
}

export default FormErrorText;
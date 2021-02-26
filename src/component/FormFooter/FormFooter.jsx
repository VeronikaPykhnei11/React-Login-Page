import React from 'react';
import "./FormFooter.css";

function FormFooter(props) {
    return (
        <div className={props.divClass}>
            <span className={props.spanClass}>{props.text}</span>
            <a href={props.link}>{props.linkText}</a>
        </div>
    )
}

export default FormFooter;
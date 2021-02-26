import React from 'react';
import "./CustomButton.css";

function CustomButton(props) {
    return (
        <div className={props.divClass}>
            <button
                className={(props.action1) ? props.classAction1 : props.classAction1}
                type={props.type}
            >{props.text}
            </button>
        </div>
    )
}

export default CustomButton;
import React from 'react';

function LogoMaker(props) {
    return (
        <div>
            <img src={props.src} className={props.imgClass} alt={props.alt}/>
        </div>
    );
}

export default LogoMaker;

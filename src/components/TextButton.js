import React from 'react';
import '../styles/Button.css'
const TextButton = (props) => {
    console.log(props.children)
    return(
        <div className={"textButtonWrapper"+props.className.length > 0 ? ' '+props.className : ''} style={{...props.style}} onClick={props.onClick}>
            {props.children !== undefined ? props.children : 'Button'}
        </div>
    )
}

export default TextButton;
import React from 'react';
import '../styles/Button.css'
const Button = (props) => {
    console.log(props.children)
    return(
        <div className={"buttonWrapper"+(props.className !== undefined ? ' '+props.className : '')} style={{...props.style}} onClick={props.onClick}>
            {props.children !== undefined ? props.children : 'Button'}
        </div>
    )
}

export default Button;
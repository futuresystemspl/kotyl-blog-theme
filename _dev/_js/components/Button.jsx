import React from "react";

const Button = (props) => (
    <a className={`${props.cssClass} button`} href={props.url}>
        <span className="button__label">{props.label}</span>
    </a>
)

export default Button;
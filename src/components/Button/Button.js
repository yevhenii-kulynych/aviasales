import React from "react";
import "./Button.css";


const Button = props => {

    return (
        <button className="btn btn-buy">{ props.text }</button>
    )
}

export default Button;
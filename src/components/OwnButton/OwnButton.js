import React from "react";
import { Button } from "react-bootstrap";
import "./OwnButton.css";


const OwnButton = props => {

    return (
        
        <Button variant="warning" onClick={props.handleShow}>{ props.text }</Button>
    )
}

export default OwnButton;
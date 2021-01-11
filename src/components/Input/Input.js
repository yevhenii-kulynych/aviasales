import React from "react";
import { Form } from 'react-bootstrap'
import './Input';


const Input = ({id, text, type, placeholder, changeHandler, ref, validation}) => {


    console.log(ref)

    return (
        <Form.Group controlId={ id }>
            <Form.Label>{ text }</Form.Label>
            <Form.Control type={ type } placeholder={ placeholder } onBlur={ changeHandler } ref={ ref }/>
        </Form.Group>
    )
}

export default Input;
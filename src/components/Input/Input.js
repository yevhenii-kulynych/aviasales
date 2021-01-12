import React, { useEffect, forwardRef } from "react";
import { Form } from 'react-bootstrap'
import './Input';


const Input = (props, ref) => {
    
    useEffect(() => {

        ref.current.style.color = props.validation.color;

    }, [ref, props.validation])

    return(
        <Form.Group controlId={ props.id }>
            <Form.Label>{ props.text }</Form.Label>
            <Form.Control
                type={ props.type }
                placeholder={ props.placeholder }
                onBlur={ props.changeHandler }
                ref={ ref }
                maxLength={ props.maxLength }
            />
        </Form.Group>
    )
}

export default forwardRef(Input);
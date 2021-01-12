import React, { useEffect, forwardRef } from "react";
import { Form, Alert } from 'react-bootstrap'
import './Input';


const Input = (props, ref) => {
    
    useEffect(() => {

        ref.current.style.color = props.validation.color;

    }, [ref, props.validation, props.validation.error, props.validation.value])


    return(
        <Form.Group controlId={ props.id }>
            <>
                <Form.Label>{ props.text }</Form.Label>
                <Form.Control
                    type={ props.type }
                    placeholder={ props.placeholder }
                    onBlur={ props.changeHandler }
                    ref={ ref }
                    maxLength={ props.maxLength }
                    autoComplete={ 'off' }
                />
                {
                    props.validation.error
                        ?
                           props.validation.value !== ''
                               ?
                                   <Alert variant={ "warning" }>
                                       { props.errorMessage }
                                   </Alert>
                               :
                               <></>

                        :
                            <Alert variant={ "success" }>
                                Отлично
                            </Alert>
                }
            </>
        </Form.Group>
    )
}

export default forwardRef(Input);
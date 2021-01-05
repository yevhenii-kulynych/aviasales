import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useValidation } from '../../hoocks/useValidation'
import "./FormComponent.css";

const FormComponent = ({ changeSuccess }) => {

    const [error, setError] = useState([]);
    const inputEmail = useRef(null);
    const inputPhone = useRef(null);
    const inputFirstName = useRef(null);
    const inputSecondName = useRef(null);
    const inputPassport = useRef(null);

    const email = useValidation('^[a-z0-9.!#$%&’*+=?^_`{|}~-]+@[a-z0-9-]+(?:\\.[a-z0-9-]+)')
    const phone = useValidation('^[0-9]{13}$')
    const firstName = useValidation('^[a-z]{3,20}$')
    const secondName = useValidation('^[a-z]{3,20}$')
    const passport = useValidation('^[a-z]{3,20}$')
    

    const submitHandler = event => {

        error 
            ? event.preventDefault()
            : changeSuccess()
        
    }

    useEffect(() => {

        inputEmail.current.style.color = email.color;
        inputPhone.current.style.color = phone.color;
        inputFirstName.current.style.color = firstName.color;
        inputSecondName.current.style.color = secondName.color;
        inputPassport.current.style.color = passport.color;
    }, [email.color, phone.color, firstName.color, secondName.color, passport.color])


    return (
        <Form onSubmit={ submitHandler }>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Введите эл. почту" onChange={ email.changeHandler } ref={ inputEmail } required={ true }/>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="phone" placeholder="Введите телефон" onChange={ phone.changeHandler } ref={ inputPhone } required={ true } maxLength={ 13 } />
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя" onChange={ firstName.changeHandler } ref={ inputFirstName } required={ true }/>
            </Form.Group>

            <Form.Group controlId="formBasicSecondName">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" placeholder="Введите фамилию" onChange={ secondName.changeHandler } ref={ inputSecondName } required={ true }/>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassport">
                <Form.Label>Номер паспорта</Form.Label>
                <Form.Control type="text" placeholder="Введите номер паспорта" onChange={ passport.changeHandler } ref={ inputPassport } required={ true } />
            </Form.Group>
            <Button variant="danger" className="mr-2">
                Отказаться
            </Button>
            
            <Button variant="success" type="submit">
                Купить
            </Button>
        </Form>  
    )
}

export default FormComponent;
import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useValidation } from '../../hoocks/useValidation'
import "./FormComponent.css";

const FormComponent = ({ changeSuccess, closeHandler }) => {

    const [error, setError] = useState({});
    const inputEmail = useRef(null);
    const inputPhone = useRef(null);
    const inputFirstName = useRef(null);
    const inputSecondName = useRef(null);
    const inputPassport = useRef(null);

    const email = useValidation('^[a-z0-9.!#$%&’*+=?^_`{|}~-]+@[a-z0-9-]+(?:\\.[a-z0-9-]+)')
    const phone = useValidation('^[0-9]{13}$')
    const firstName = useValidation('^[a-zа-я]{3,20}$')
    const secondName = useValidation('^[a-zа-я]{3,20}$')
    const passport = useValidation('^[a-zа-я]{3,20}$')
    

    const submitHandler = event => {
        
        const list = Object.values(error)
        
        list.every(el => el === false) 
            ? changeSuccess()
            : event.preventDefault()
        
    }

    useEffect(() => {

        inputEmail.current.style.color = email.color;
        inputPhone.current.style.color = phone.color;
        inputFirstName.current.style.color = firstName.color;
        inputSecondName.current.style.color = secondName.color;
        inputPassport.current.style.color = passport.color;
    }, [email.color, phone.color, firstName.color, secondName.color, passport.color])

    
    useEffect(() => {

        const errorList = Object.assign({}, error, 
            { phone: phone.error },
            { email: email.error },
            { firstName: firstName.error },
            { secondName: secondName.error },
            { passport: passport.error }
        )

        setError(errorList)
    }, [email.error, phone.error, firstName.error, secondName.error, passport.error])


    return (
        <Form onSubmit={ submitHandler }>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Введите эл. почту" onBlur={ email.changeHandler } ref={ inputEmail }/>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="phone" placeholder="Введите телефон" onBlur={ phone.changeHandler } ref={ inputPhone } maxLength={ 13 } />
            </Form.Group>

            <Form.Group controlId="formBasicFirstName">
                <Form.Label>Имя</Form.Label>
                <Form.Control type="text" placeholder="Введите имя" onBlur={ firstName.changeHandler } ref={ inputFirstName } />
            </Form.Group>

            <Form.Group controlId="formBasicSecondName">
                <Form.Label>Фамилия</Form.Label>
                <Form.Control type="text" placeholder="Введите фамилию" onBlur={ secondName.changeHandler } ref={ inputSecondName }/>
            </Form.Group>
        
            <Form.Group controlId="formBasicPassport">
                <Form.Label>Номер паспорта</Form.Label>
                <Form.Control type="text" placeholder="Введите номер паспорта" onBlur={ passport.changeHandler } ref={ inputPassport } />
            </Form.Group>
            <Button variant="danger" className="mr-2" onClick={ closeHandler }>
                Отказаться
            </Button>
            
            <Button variant="success" type="submit">
                Купить
            </Button>
        </Form>  
    )
}

export default FormComponent;
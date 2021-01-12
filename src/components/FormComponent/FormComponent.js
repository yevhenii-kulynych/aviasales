import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from "react-bootstrap";
import { useValidation } from '../../hoocks/useValidation';
import Input from '../Input/Input';
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
    const firstName = useValidation('^[a-zа-я]{4,20}$')
    const secondName = useValidation('^[a-zа-я]{4,20}$')
    const passport = useValidation('^[a-zа-я]{4,20}$')

    const withoutErrors = Object.values(error).every(el => !el);

    const submitHandler = event => {
        withoutErrors
            ? changeSuccess()
            : event.preventDefault()
    }


    
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
            <Input 
                id={ 'formBasicEmail' }
                text={ 'Email' }
                type={ 'text' }
                placeholder={ 'Введите эл. почту' }
                changeHandler={ email.changeHandler }
                ref={ inputEmail }
                validation={ email }
                errorMessage={ 'Неправильно введён email' }
            />
            <Input
                id={ 'formBasicPhone' }
                text={ 'Телефон' }
                type={ 'phone' }
                placeholder={ 'Введите телефон' }
                changeHandler={ phone.changeHandler }
                ref={ inputPhone }
                validation={ phone }
                errorMessage={ 'Неправильно введён телефон' }
                maxLength={ 13 }
            />
            <Input
                id={ 'formBasicFirstName' }
                text={ 'Имя' }
                type={ 'text' }
                placeholder={ 'Введите имя' }
                changeHandler={ firstName.changeHandler }
                ref={ inputFirstName }
                validation={ firstName }
                errorMessage={ 'Неправильно введено имя' }
            />
            <Input
                id={ 'formBasicSecondName' }
                text={ 'Фамилия' }
                type={ 'text' }
                placeholder={ 'Введите фамилию' }
                changeHandler={ secondName.changeHandler }
                ref={ inputSecondName }
                validation={ secondName }
                errorMessage={ 'Неправильно введена фамилия' }
            />
            <Input
                id={ 'formBasicPassport' }
                text={ 'Номер паспорта' }
                type={ 'text' }
                placeholder={ 'Введите номер паспорта' }
                changeHandler={ passport.changeHandler }
                ref={ inputPassport }
                validation={ passport }
                errorMessage={ 'Неправильно введён номер паспорта' }
            />
            <Button variant="danger" className="mr-2" onClick={ closeHandler }>
                Отказаться
            </Button>
            
            <Button variant="success" type="submit" disabled={!withoutErrors}>
                Купить
            </Button>
        </Form>  
    )
}

export default FormComponent;
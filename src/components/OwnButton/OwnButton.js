import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./OwnButton.css";


const OwnButton = ({ price, handleShow }) => {

    const currency = useSelector(state => state.tickets.initialCurrency)
    
    let currentPrice = Math.floor(price * currency.ratio);

    return (
        
        <Button variant="warning" onClick={ handleShow }>Купить за { currentPrice } { currency.name }</Button>
    )
}

export default OwnButton;
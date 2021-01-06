import React from 'react';
import { ButtonGroup, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { switchCurrency } from "../../redux/actions/switchCurrency";
import { RUB, USD, EUR } from '../../redux/types/currencyTypes';
import './CurrencySwitcher.css';

const CurrencySwitcher = () => {

    const dispatch = useDispatch();

    return (
        <div className="container currency pt-3 pb-3">
            <h2>Валюта</h2>
            <ButtonGroup className="mr-2" aria-label="Second group">
                <Button onClick={ () => dispatch(switchCurrency(USD, {name: RUB, ratio: 1})) }>RUB</Button> 
                <Button onClick={ () => dispatch(switchCurrency(USD, {name: USD, ratio: 0.014})) }>USD</Button> 
                <Button onClick={ () => dispatch(switchCurrency(EUR, {name: EUR, ratio: 0.011})) }>EUR</Button>
            </ButtonGroup>
        </div>
    )
}


export default CurrencySwitcher;

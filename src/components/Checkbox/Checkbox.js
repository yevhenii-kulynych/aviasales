import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filterStops } from "../../redux/actions/filterStops";
import { Form } from 'react-bootstrap';

const Checkbox = ({ text, name, id, stops, all }) => {

    const dispatch = useDispatch();

    const f = (num) => dispatch(filterStops(num))

    const x = () => dispatch({type: 'RESET'})


    const checkboxHandler = event => {

        if (event.target.checked) {
            
            all ? x() : f(stops)
        } else {

            x()
        }
    }

    return (
        <Form.Check
            type="checkbox"
            label={ text }
            name={ name }
            id={ id }
            onClick={ checkboxHandler }
        />
    )
}

export default Checkbox;
import React  from 'react';
import { useDispatch } from "react-redux";
import { filterStops, removeFilterStops, resetFilter } from "../../redux/actions/filterStops";
import { Form } from 'react-bootstrap';

const Checkbox = ({ text, name, id, stops, all }) => {

    const dispatch = useDispatch();
    const addFilterItem = value => dispatch(filterStops(value))
    const removeItemFromFilter = value => dispatch(removeFilterStops(value))
    const resetAll = () => dispatch(resetFilter())

    const checkboxHandler = event => {

        if (event.target.checked) {
            
            all ? resetAll() : addFilterItem(stops)
        } else {

            removeItemFromFilter(stops)
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
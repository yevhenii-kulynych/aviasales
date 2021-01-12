import React, { useState, useRef, useEffect }  from 'react';
import { useDispatch } from "react-redux";
import { filterStops, removeFilterStops, resetFilter, resetToOne } from "../../redux/actions/filterStops";
import { Form } from 'react-bootstrap';
import './Checkbox.css'

const Checkbox = ({ text, name, id, stops, all, isChecked }) => {

    const [isShown, setIsShown] = useState(false);
    const inp = useRef(null)

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

    useEffect(() => {
        inp.current.checked = isChecked
    }, [isChecked])

    return (
        <div className={`input-wrap ${isShown ? 'hovered' : ''}`} 
            onMouseEnter={() => setIsShown(true)} 
            onMouseLeave={() => setIsShown(false)}
        >
            <Form.Check
                type="checkbox"
                label={ text }
                name={ name }
                id={ id }
                onClick={ checkboxHandler }
                ref={ inp }
            />
            {
                isShown && (
                    <p className="text-hover"
                       onClick={ () => { dispatch(resetToOne(stops)) } }
                    >
                        Только
                    </p>
                )
            }
        </div>
    )
}

export default Checkbox;
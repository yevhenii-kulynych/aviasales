import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { filterStops } from "../../redux/actions/filterStops";
import { getTicketsAsync } from "../../redux/actions/GetTickets";
import { Form, Row, Col } from 'react-bootstrap';
import './StopsFilter.css';

const StopsFilter = () => {

    const stops = useSelector(state => state.tickets.tickets)
    const uniqueStops = [...new Set(stops.map(el => el.stops))].sort();
    
    const dispatch = useDispatch();

    const changeHandler = event => {

        event.target.checked ? dispatch(filterStops(3)) : dispatch(getTicketsAsync())
    }

    return (
        <div className="filter p-3">
            <h4>Количество пересадок</h4>
            <>
                <Form.Group as={ Row }>
                    <Col sm={ 12 }>
                        <Form.Check
                        type="checkbox"
                        label="Все"
                        name="formHorizontal"
                        id="formHorizontalRadios0"
                        onChange={ changeHandler }
                        />
                        {
                            uniqueStops.map(el => {
                                
                                const text = el === 0 ? 'Без пересадки' : el === 1 ? `${el} пересадка` : `${el} пересадок`

                                return <Form.Check
                                        key={ el + 1 }
                                        type="checkbox"
                                        label={ text }
                                        name="formHorizontal"
                                        id={ `formHorizontalRadios${ el+1 }` }
                                        onChange={ changeHandler }
                                        />
                            })
                        }
                    </Col>
                </Form.Group>
            </>
        </div>
    )
}


export default StopsFilter;


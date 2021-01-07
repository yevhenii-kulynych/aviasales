import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Form, Row, Col } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox'
import './StopsFilter.css';

const StopsFilter = () => {

    const stops = useSelector(state => state.tickets.tickets)
    const uniqueStops = [...new Set(stops.map(el => el.stops))].sort();

    
    return (
        <div className="filter p-3">
            <h4>Количество пересадок</h4>
            <>
                <Form.Group as={ Row }>
                    <Col sm={ 12 }>
                        <Checkbox 
                            text={ 'Все' } 
                            name={ 'formHorizontal' }
                            id={ 'formHorizontal-all' }
                            all={ true }
                        />
                        {
                            uniqueStops.map(el => {
                                
                                const text = el === 0 ? 'Без пересадки' : el === 1 ? `${el} пересадка` : `${el} пересадок`

                                return <Checkbox
                                            key={ el } 
                                            text={ text } 
                                            name={ 'formHorizontal' }
                                            id={ `formHorizontal-${ el }` }
                                            stops={ el }
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


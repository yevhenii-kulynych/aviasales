import React from 'react';
import { useSelector } from "react-redux";
import { Form, Row, Col } from 'react-bootstrap';
import Checkbox from '../Checkbox/Checkbox'
import './StopsFilter.css';

const StopsFilter = () => {

    const stops = useSelector(state => state.tickets.stops);
    const isChecked = useSelector(state => state.tickets.isChecked)
    
    console.log('ischecked', isChecked);
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
                            isChecked={ false }
                        />
                        {
                            isChecked.inputs.map(el => {

                                const text = el.name === 0 ? 'Без пересадки' : el.name === 1 ? `${el.name} пересадка` : `${el.name} пересадки`
                                console.log(el);
                                return <Checkbox
                                            key={ el.name } 
                                            text={ text } 
                                            name={ 'formHorizontal' }
                                            id={ `formHorizontal-${ el.name }` }
                                            stops={ el.name }
                                            isChecked={ el.isChecked }
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


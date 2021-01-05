import React, { useState } from "react";
import { Modal, Button} from "react-bootstrap";
import FormComponent from "../FormComponent/FormComponent"
import "./Popup.css";

const Popup = props => {

    const [success, setSuccess] = useState(false);

    const changeSuccess = () => {
      setSuccess(true)
    }

    return (
        <>
          <Modal
            show={ props.isShow }
            onHide={ props.handleClose }
            backdrop="static"
            keyboard={ false }
          >
            <Modal.Header closeButton>
              <Modal.Title>Покупка билета</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <>
                {
                  !success 
                    
                    ?
                      <>
                        <div className="item">
                            <div className="item__right">
                                <div className="time">
                                    <p className="time__departure">{ props.data.departureTime }</p>
                                    <p className="time__stops">{ props.data.stops ? props.data.stops : 'Без' } пересадки</p>
                                    <p className="time__arrivals">{ props.data.arrivalTime }</p>
                                </div>
                                <div className="place">
                                    <p className="place__from">{ props.data.origin }, { props.data.originName }</p>
                                    <p className="place__to">{ props.data.destination }, { props.data.destinationName }</p>
                                </div>
                            </div>
                        </div>
                        <FormComponent changeSuccess={ changeSuccess } />
                      </>
                    :
                      <div>
                        <h1>Успешно!!!!</h1>
                      </div>
                }
                </>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default Popup;
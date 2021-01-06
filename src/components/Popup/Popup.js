import React, { useState } from "react";
import { Modal, Button} from "react-bootstrap";
import FormComponent from "../FormComponent/FormComponent"
import "./Popup.css";

const Popup = ({ data, isShow, handleClose }) => {

    const [success, setSuccess] = useState(false);

    const changeSuccess = () => {
      setSuccess(true)
    }

    return (
        <>
          <Modal
            show={ isShow }
            onHide={ handleClose }
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
                                    <p className="time__departure">{ data.departure_time }</p>
                                    <p className="time__stops">{ data.stops ? data.stops : 'Без' } пересадки</p>
                                    <p className="time__arrivals">{ data.arrival_time }</p>
                                </div>
                                <div className="place">
                        <p className="place__from">{ data.origin }, { data.origin_name }</p>
                        <p className="place__to">{ data.destination }, { data.destination_name }</p>
                    </div>
                            </div>
                        </div>
                        <FormComponent changeSuccess={ changeSuccess } closeHandler={ handleClose } />
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
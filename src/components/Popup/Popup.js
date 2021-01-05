import React from "react";
import { Modal, Button} from "react-bootstrap"
import "./Popup.css";

const Popup = props => {

    return (
        <>
          <Modal
            show={props.isShow}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Покупка билета</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="item">

                    <div className="item__right">
                        <div className="time">
                            <p className="time__departure">{ props.data.departureTime }</p>
                            <p className="time__stops">{ props.data.stops } пересадки</p>
                            <p className="time__arrivals">{ props.data.arrivalTime }</p>
                        </div>
                        <div className="place">
                            <p className="place__from">{ props.data.origin }, { props.data.originName }</p>
                            <p className="place__to">{ props.data.destination }, { props.data.destinationName }</p>
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger" onClick={props.handleClose}>
                Отказаться
                </Button>
                <Button variant="success" onClick={props.handleClose}>
                  Купить
                </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
}

export default Popup;
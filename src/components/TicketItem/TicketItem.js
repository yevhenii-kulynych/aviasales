import React, { useState } from "react";
import OwnButton from "../OwnButton/OwnButton";
import Popup from '../Popup/Popup'
import logo from "../../assets/company.png";
import "./TicketItem.css";

const TicketItem = props => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formatDate = date => {

        const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
        const newDate = new Date(date).toLocaleDateString("ru-RU", options);
        const slicedDate = newDate.split(',').slice(1);
        const resultData = slicedDate.concat(newDate.split(',').slice(0,1)).join('').trim();

        return resultData.replace(/\./, ",");
    }

    return (
        <>
            <div className="item">
                <div className="item__left">
                    <img className="item__company-logo" src={ logo } />
                    <OwnButton text={ props.textBtn } handleShow={handleShow}></OwnButton>
                </div>
                <div className="item__right">
                    <div className="time">
                        <p className="time__departure">{ props.departureTime }</p>
                        <p className="time__stops">{ props.stops } пересадки</p>
                        <p className="time__arrivals">{ props.arrivalTime }</p>
                    </div>
                    <div className="place">
                        <p className="place__from">{ props.origin }, { props.originName }</p>
                        <p className="place__to">{ props.destination }, { props.destinationName }</p>
                    </div>
                    <div className="date">
                        <p className="date__from">{formatDate(props.departureDate) }</p>
                        <p className="date__to">{formatDate(props.arrivalDate) }</p>
                    </div>
                </div>
            </div>
            <Popup isShow={ show } handleClose={ handleClose } data={ props } />
        </>
    )
}

export default TicketItem;
import React from "react";
import Button from "../Button/Button";
import logo from "./company.png";
import "./TicketItem.css";


const TicketItem = props => {

    return (
        <div className="item">
            <div className="item__left">
                <img className="item__company-logo" src={ logo } />
                <Button text={ props.textBtn }></Button>
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
            </div>
        </div>
    )
}

export default TicketItem;
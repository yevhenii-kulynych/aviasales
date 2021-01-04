import React, { useState, useEffect } from "react";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.css";


const TicketList = () => {

    const [items, setItems] = useState([])

    useEffect(() => {

        fetch('tickets.json')
        .then(res => res.json())
        .then(data => setItems(data.tickets))
    }, [])  

    console.log(items);

    return (
        <div className="ticket-list">
            {
                items.map((el, i) => {

                    return <TicketItem 
                            key={ i }
                            textBtn={ `Купить за ${el.price} RUB` }
                            departureTime={ el.departure_time }
                            arrivalTime={ el.arrival_time }
                            stops={ el.stops }
                            origin={ el.origin }
                            destination={ el.destination }
                            originName={ el.origin_name }
                            destinationName={ el.destination_name }
                            />
                })
            }
        </div>
    )
}

export default TicketList;
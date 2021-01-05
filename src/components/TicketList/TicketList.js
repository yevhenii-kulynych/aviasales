import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from "../../redux/actions/GetTickets";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.css";


const TicketList = () => {

    const tickets = useSelector(state => state.tickets);
    const dispatch = useDispatch()


    useEffect(() => {

        dispatch(getTicketsAsync())
    }, [])
    

    console.log(tickets);

    return (
        <div className="ticket-list">

            {
                tickets.length > 0
                ?
                    tickets.map((el, i) => {

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
                                departureDate={ el.departure_date }
                                arrivalDate={ el.arrival_date }
                                />
                    })
                :
                    <p>Нет данных</p>
            }
        </div>
    )
}

export default TicketList;
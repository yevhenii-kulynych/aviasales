import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from "../../redux/actions/GetTickets";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.css";


const TicketList = () => {

    const { tickets } = useSelector(state => state.tickets);
    const { filteredTickets } = useSelector(state => state.tickets)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTicketsAsync())
    }, [])


    console.log(filteredTickets);

    return (
        <div className="ticket-list">

            {
                filteredTickets.length > 0
                ?
                filteredTickets.map(el => {
                       
                        return <TicketItem 
                                key={ Math.floor(Math.random() * 1e6) }
                                ticket={ el }
                                />
                    })
                :
                    <p>Нет данных</p>
            }
        </div>
    )
}

export default TicketList;
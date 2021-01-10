import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from "../../redux/actions/GetTickets";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.css";


const TicketList = () => {

    const { tickets } = useSelector(state => state.tickets);
    const { filteredTickets } = useSelector(state => state.tickets);
    const { isCheckedStops } = useSelector(state => state.tickets)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getTicketsAsync())
    }, [])


    return (
        <div className="ticket-list">

            {
                isCheckedStops.stops.length === 0
                ?
                    
                    tickets.map(el => {
                        
                        return <TicketItem 
                                key={ Math.floor(Math.random() * 1e6) }
                                ticket={ el }
                                />
                    })
                :
                    filteredTickets.filter(e => isCheckedStops.stops.includes(e.stops)).map(el => {
                        console.log(isCheckedStops.stops)
                        return <TicketItem 
                                key={ Math.floor(Math.random() * 1e6) }
                                ticket={ el }
                                />
                    })
            }
        </div>
    )
}

export default TicketList;
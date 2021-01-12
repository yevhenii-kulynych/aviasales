import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getTicketsAsync } from "../../redux/actions/GetTickets";
import TicketItem from "../TicketItem/TicketItem";
import "./TicketList.css";


const TicketList = () => {

    const { tickets, isChecked } = useSelector(state => state.tickets);
    const dispatch = useDispatch()


    useEffect(() => {
        
        dispatch(getTicketsAsync())
    }, [dispatch])

    const isFiltered = isChecked.inputs.some(stop => stop.isChecked);


    return (
        <div className="ticket-list">

            {
                !isFiltered
                ?

                    tickets.map(el => {
                        
                        return <TicketItem 
                                key={ Math.floor(Math.random() * 1e6) }
                                ticket={ el }
                                />
                    })
                :
                    tickets.filter(e => isChecked.inputs.some(stop => stop.name === e.stops && stop.isChecked)).map(el => {
                        console.log(isChecked.inputs)
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
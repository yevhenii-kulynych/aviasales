import { GET_TICKETS } from "../types/getTickets";

const tickets = (state = [], action) => {

    switch (action.type) {
        case GET_TICKETS:
          return state.concat(...action.payload)
        default:
          return state;
      }  
}

export default tickets;
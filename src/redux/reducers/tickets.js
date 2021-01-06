import { GET_TICKETS } from "../types/getTickets";
import { RUB, USD, EUR } from '../types/currencyTypes';
 
const initialState = {
  tickets: [],
  initialCurrency: { name: RUB, ratio: 1 },
}

const tickets = (state = initialState, action) => {

    switch (action.type) {

        case GET_TICKETS:

          return Object.assign({}, state, {
            tickets: [...action.payload]
          })
        case USD:

          return Object.assign({}, state, {
              tickets: [...state.tickets],
              initialCurrency: {...action.payload},
        })

        case EUR:

          return Object.assign({}, state, {
              tickets: [...state.tickets],
              initialCurrency: {...action.payload},
        })

        default:

          return state;
      }  
}

export default tickets;
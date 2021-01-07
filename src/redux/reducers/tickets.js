import { GET_TICKETS } from "../types/getTickets";
import { RUB, CHANGE_CURRENCY } from '../types/currencyTypes';
import { FILTER } from '../types/filter';

const initialState = {
  tickets: [],
  initialCurrency: { name: RUB, ratio: 1 },
  filteredTickets: [],
  isChecked: { stops: [] }
}

const tickets = (state = initialState, action) => {

    switch (action.type) {

        case GET_TICKETS:

          return Object.assign({}, state, {
            tickets: [...action.payload],
            filteredTickets: [...action.payload]
          })
          
        case CHANGE_CURRENCY:

          return Object.assign({}, state, {
              initialCurrency: {...action.payload},
        })

        case FILTER:

          return Object.assign({}, state, {
            
            isChecked: { stops: [...state.isChecked.stops , action.payload] }
          })

        case "RESET":

          return Object.assign({}, state, {
              
            isChecked: { stops: [] }
          })  

        default:

          return state;
      }  
}

export default tickets;
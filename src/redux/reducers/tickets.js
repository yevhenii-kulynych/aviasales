import { GET_TICKETS } from "../types/getTickets";
import { RUB, CHANGE_CURRENCY } from '../types/currencyTypes';
import { FILTER, REMOVE_CATEGORY, RESET } from '../types/filter';

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
          console.log('state ', state.isChecked.stops)
          const filtered = [...state.isChecked.stops , action.payload]

          console.log('state filtered', filtered)
          return Object.assign({}, state, {
            
            isChecked: { stops: [...new Set(filtered)] }
          })

        case REMOVE_CATEGORY:

          const filteredItems = [...state.isChecked.stops].filter(empty => empty !== action.payload)

          console.log('REMOVE_CATEGORY', filteredItems)
          return Object.assign({}, state, {
            
            isChecked: { stops: [...new Set(filteredItems)] }
          })

        case RESET:

          return Object.assign({}, state, {
              
            isChecked: { stops: [] }
          })  

        default:

          return state;
      }  
}

export default tickets;
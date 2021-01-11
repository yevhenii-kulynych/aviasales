import { GET_TICKETS } from "../types/getTickets";
import { RUB ,CHANGE_CURRENCY, FETCH_CURRENCY_RATES } from '../types/currencyTypes';
import { FILTER, REMOVE_CATEGORY, RESET, ONLY_ONE } from '../types/filter';

const initialState = {
  tickets: [],
  currencyRates: {},
  initialCurrency: {},
  stops: [],
  filteredTickets: [],
  isCheckedStops: { stops: [] },
  isChecked: { inputs: []}
}

const tickets = (state = initialState, action) => {

    switch (action.type) {

        case GET_TICKETS:

          const uniqueCheckValue = [...new Set(action.payload.map(el => el.stops))].sort();
          const checkStateObjects = uniqueCheckValue.map(el => Object.assign({}, {
            name: el,
            isChecked: false
          }))

          return Object.assign({}, state, {

            tickets: [...action.payload],
            stops: [...new Set(action.payload.map(el => el.stops))].sort(),
            filteredTickets: [...action.payload],
            isChecked: { inputs: [...checkStateObjects] }
          })

        case FETCH_CURRENCY_RATES:
          
          const initialCurrencyName = RUB;
          const initialResult = {};

          for (const [key, value] of Object.entries(action.payload)) {

            if (key === initialCurrencyName) {

              initialResult.name = key;
              initialResult.ratio = value;
            }
          }

          return Object.assign({}, state, { 

            initialCurrency: { ...initialResult },
            currencyRates: { ...action.payload },
        })  
          
        case CHANGE_CURRENCY:
          
          const setCurrencyName = action.payload;
           switchedResult = {};

          for (const [key, value] of Object.entries(state.currencyRates)) {

            if (key === setCurrencyName) {

              switchedResult.name = key;
              switchedResult.ratio = value;
            }
          }

          return Object.assign({}, state, { 

            initialCurrency: { ...switchedResult },
        })

        case FILTER:

          console.log('state ', state.isCheckedStops.stops)
          const filteredStops = [...state.isCheckedStops.stops , action.payload]
          const changeCheckedInputsForFilterAction = state.isChecked.inputs.map(el => {

            if (el.name === action.payload) {

              el.isChecked = true
            }
            return el
          })

          console.log('changeCheckedInputsForFilterAction', changeCheckedInputsForFilterAction)
          return Object.assign({}, state, {
            
            isCheckedStops: { stops: [...new Set(filteredStops)] },
            isChecked: { inputs: [...changeCheckedInputsForFilterAction] }
          })

        case ONLY_ONE:
           
            const filteredStopsForOnlyOneAction = [...state.isCheckedStops.stops].filter(empty => empty === action.payload)
            const changeCheckedInputsForOnlyOneAction = state.isChecked.inputs.map(el => {
  
              if (el.name === action.payload) {
  
                el.isChecked = true
              } else {

                el.isChecked = false
              }
              return el
            })
  
            console.log('changeCheckedInputsForOnlyOneAction', changeCheckedInputsForOnlyOneAction)
            return Object.assign({}, state, {
              
              isCheckedStops: { stops: [...new Set(filteredStopsForOnlyOneAction)] },
              isChecked: { inputs: [...changeCheckedInputsForOnlyOneAction] }
            })  

        case REMOVE_CATEGORY:

          const filteredItems = [...state.isCheckedStops.stops].filter(empty => empty !== action.payload)
          const changeCheckedInputsForRemoveAction = state.isChecked.inputs.map(el => {

            if (el.name === action.payload) {

              el.isChecked = false
            }
            return el
          })
          console.log('REMOVE_CATEGORY', filteredItems)
          console.log('changeCheckedInputsForRemoveAction', changeCheckedInputsForRemoveAction)
          return Object.assign({}, state, {
            
            isCheckedStops: { stops: [...new Set(filteredItems)] },
            isChecked: { inputs: [...changeCheckedInputsForRemoveAction] }
          })

        case RESET:

          return Object.assign({}, state, {
              
            isCheckedStops: { stops: [] }
          })  

        default:

          return state;
      }  
}

export default tickets;
import { FILTER } from '../types/filter';

export const filterStops = data => {
    
    return {
      type: FILTER,
      payload: data
    }
}
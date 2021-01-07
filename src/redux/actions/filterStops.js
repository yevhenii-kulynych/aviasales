import { FILTER, REMOVE_CATEGORY, RESET } from '../types/filter';

export const filterStops = data => {
    
    return {
      type: FILTER,
      payload: data
    }
}

export const removeFilterStops = data => {
    
  return {
    type: REMOVE_CATEGORY,
    payload: data
  }
}

export const resetFilter = () => {
    
  return {
    type: RESET
  }
}
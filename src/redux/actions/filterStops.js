import { FILTER, RESET, ONLY_ONE } from '../types/filter';

export const filterStops = data => {
    
    return {
      type: FILTER,
      payload: data
    }
}

export const resetFilter = () => {
    
  return {
    type: RESET
  }
}

export const resetToOne = data => {

  return {
    type: ONLY_ONE,
    payload: data
  }
}


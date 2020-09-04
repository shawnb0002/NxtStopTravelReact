import * as ActionTypes from './ActionTypes';

const initialState = {
    cheapFlights: [],
    loading: false,
    errMess: null
}

export const CheapFlights = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.FETCH_CHEAPEST_DEALS_BEGIN: 
        return {
            ...state,
            cheapFlights: [],
            loading: true,
            errMess: null 
        }
        case ActionTypes.FETCH_CHEAPEST_DEALS_SUCCESS: 
        return {
            ...state,
            cheapFlights: action.payload,
            loading: false,
            errMess: null

            
        }
        case ActionTypes.FETCH_CHEAPEST_DEALS_FAILED: 
        return {
            ...state,
            errMess: action.payload,
            loading: false,
        }
        default:
            return state;
    }
}
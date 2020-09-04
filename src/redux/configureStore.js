import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { CheapFlights } from './cheapFlights';



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            //multiple reducers go here to be combined
            // campsites: Campsites,
            cheapFlights: CheapFlights,
       
        }),
        applyMiddleware(thunk, logger)
    );
    return store
}
import * as ActionTypes from './ActionTypes';


//Redux actions that fetch data usually come in triplets: BEGIN, SUCCESS, FAILURE.


export const fetchCheapFlights = () => dispatch => {

	dispatch(fetchCheapFlightsBegin())

	return fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=-&origin=ATL&currency=USD&page=None", {
		"method": "GET",
		"headers": {
			"x-access-token": "196a25486b8fa53da1d20ebb0d56475c",
			"x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
			"x-rapidapi-key": "PEounm683BmshmQGQxLrlA0ayOSOp1XiZsFjsnUnn1R61XFu7W"
		}
	})
	.then(response => {
			if(response.ok){
				return response;
			} else {
				const error = new Error(`Error ${response.status}: ${response.statusText}`);                error.response = response;
				throw error;
			}
		},
		error =>{
			var errMess = new Error(error.message);
			throw errMess;
		}
	)
	.then(response => response.json())
	.then(cheapFlights => dispatch(fetchCheapFlightsSuccess(cheapFlights)))
	.catch(error => dispatch(fetchCheapFlightsFailed(error.message)))
}

export const fetchCheapFlightsBegin = () => ({
	type: ActionTypes.FETCH_CHEAPEST_DEALS_BEGIN 
})

export const fetchCheapFlightsFailed = errMess => ({
	type: ActionTypes.FETCH_CHEAPEST_DEALS_FAILED,
	payload: errMess
})

export const fetchCheapFlightsSuccess = cheapFlights => ({
	type: ActionTypes.FETCH_CHEAPEST_DEALS_SUCCESS,
	payload: cheapFlights
})



// fetch("https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap?destination=-&origin=ATL&currency=USD&page=None", {
// 	"method": "GET",
// 	"headers": {
// 		"x-access-token": "196a25486b8fa53da1d20ebb0d56475c",
// 		"x-rapidapi-host": "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "PEounm683BmshmQGQxLrlA0ayOSOp1XiZsFjsnUnn1R61XFu7W"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.log(err);
// })
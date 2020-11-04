import isPromise from "is-promise"
import {isFSA} from "flux-standard-action"

export default function promiseMiddleware({dispatch}) {
	return next => action => {
		if (!isFSA(action)) {
			return isPromise(action) ? action.then(dispatch) : next(action)
		}
		return isPromise(action.payload)
		? action.payload
				  .then(res => dispatch({...action, payload: res}))
				  .catch(err => {
				  	  dispatch({...action, payload: err, error: true})
					  return Promise.reject(err)
				  })
		 : next(action)
	}
}


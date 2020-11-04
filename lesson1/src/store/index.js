// import {createStore, applyMiddleware, combineReducers} from 'redux'
import {createStore, applyMiddleware, combineReducers} from '../lesson2/zRedux'
// import logger from 'redux-logger'
// import thunk from 'redux-thunk'
import logger from '../lesson2/logger'
import thunk from '../lesson2/thunk'
import zPromise from '../lesson2/zPromise'
// import createStore from '../lesson2/zRedux'

function countReducer(state = 0, action) {
	switch (action.type) {
		case "ADD":
			return state + 1
		case "MINUS":
			return state - 1
		default:
			return state
	}
}

const store = createStore(combineReducers({count: countReducer}), applyMiddleware(thunk, zPromise, logger))

export default store

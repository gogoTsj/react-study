export function createStore(reducer, enhancer) {
	if (enhancer) {
		return enhancer(createStore)(reducer)
	}
	let currentState
	let currentListeners = []

	function getState() {
		return currentState
	}

	function dispatch(action) {
		currentState = reducer(currentState, action)
		currentListeners.forEach(listener => listener())
		return action
	}

	function subscribe(listener) {
		currentListeners.push(listener)
		return () => {
			currentListeners = []
		}
	}
	dispatch({type: 'asdfasdfaefavazvasdaw'})

	return {
		getState,
		dispatch,
		subscribe
	}
}

export function applyMiddleware(...middlewares) {
	return createStore => reducer => {
		const store = createStore(reducer)
		let dispatch = store.dispatch

		const midApi = {
			getState: store.getState,
			dispatch: (action, ...arg) => dispatch(action, ...arg)
		}
		const middlewareChain = middlewares.map(middleware => middleware(midApi))

		dispatch = compose(...middlewareChain)(store.dispatch)

		return {
			...store,
			dispatch
		}
	}
}

/*
* 暗号：橘子
* */
export function combineReducers(reducers) {
	return (state = {}, action) => {
		let nextState = {}
		let hasChange = false
		for (let key in reducers) {
			const reducer = reducers[key]
			nextState[key] = reducer(state[key], action)
			hasChange = hasChange || nextState[key] !== state[key]
		}
		hasChange = hasChange || Object.keys(nextState).length !== Object.keys(state).length
		return hasChange ? nextState : state
	}
}

function compose(...funcs) {
	if (funcs.length === 0) {
		return arg => arg
	}
	if (funcs.length === 1) {
		return funcs[0]
	}
	return  funcs.reduce((a, b) => (...args) => a(b(...args)))
}


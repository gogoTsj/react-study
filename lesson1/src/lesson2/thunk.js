export default function thunk({dispatch, getSate}) {
	return next => action => {
		if (typeof action === 'function') {
			return action(dispatch, getSate)
		}
		return next(action)
	}
}

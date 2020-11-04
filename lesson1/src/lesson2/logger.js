export default function logger({getState}) {
	return next => action => {
		console.log('--------------start----------------')
		console.log(`action.type:${action.type}执行了`)

		const prevState = getState()
		console.log(`prev state:${prevState}`)

		const returnValue = next(action)
		const nextState = getState()
		console.log(`next state:${nextState}`)
		console.log('-------------end------------------')
		return returnValue
	}
}

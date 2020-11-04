import React, {Component} from 'react'
import store from "../store"

export default class ReduxPage extends Component{
	componentDidMount() {
		store.subscribe(() => {
			this.forceUpdate()
		})
	}
	add = () => {
		store.dispatch({type: 'ADD'})
	}
	asyncAdd = () => {
		store.dispatch((dispatch, getState) => {
			setTimeout(() => {
				dispatch({type: 'ADD', payload: 10})
			}, 1000)
		})
	}
	minus = () => {
		store.dispatch({type: 'MINUS'})
	}
	promiseMinus = () => {
		store.dispatch(
			 Promise.resolve({
				 type: 'MINUS',
				 payload: 100
			 })
		)
	}
	render() {
		return (
			 <div>
				 <h3>ReduxPage</h3>
				 <p>store:{store.getState().count}</p>
				 <button onClick={this.add}>add</button>
				 <button onClick={this.asyncAdd}>async add</button>
				 <button onClick={this.minus}>minus</button>
				 <button onClick={this.promiseMinus}>promiseMinus</button>
			 </div>
		)
	}
}

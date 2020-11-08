import React, {Component} from 'react'
import {RouterContext} from "./RouterContext"

export default class BrowserRouter extends Component{
	constructor(props) {
		super(props);
		this.state = {
			location: props.history.location
		}
		this.unlisten = props.history.listen(location => {
			this.setState({
				location
			})
		})
	}
	componentWillUnmount() {
		if (this.unlisten) this.unlisten()
	}

	render() {
		return (
			 <RouterContext.Provider value={{history: this.props.history, location: this.state.location}}>
				 {this.props.children}
			 </RouterContext.Provider>
		)
	}
}

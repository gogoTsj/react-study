import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReactReduxPage extends Component {
	render() {
		const { count, add, minus, asyncAdd } = this.props
		console.log('this.props', this.props)
		return (
			 <div>
				 <h1>ReactReduxPage</h1>
				 <p>num:{count.count}</p>
				 <button onClick={add}>add</button>
				 <button onClick={minus}>minus</button>
				 <button onClick={asyncAdd}>asyncAdd</button>
			 </div>
		)
	}
}

const mapStateToProps = state => {
	return {
		count: state
	}
}

const mapDispatchToProps = {
	add: () => {
		return { type: 'ADD' }
	},
	minus: () => {
		return { type: 'MINUS' }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage)

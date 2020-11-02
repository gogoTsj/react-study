import React, {Component} from 'react'
import FieldContext from "./FieldContext"

export default class Field extends Component {
	static contextType = FieldContext

	componentDidMount () {
		const {registerField} = this.context
		this.cancelRegisterField = registerField(this)
	}

	componentWillUnmount() {
		if (this.cancelRegisterField) {
			this.cancelRegisterField()
		}
	}

	onStoreChange = () => {
		this.forceUpdate()
	}

	getControlled = () => {
		const {name} = this.props
		const {getFieldValue, setFieldValue} = this.context
		return {
			value: getFieldValue(name),
			onChange: event => {
				const newValue = event.target.value
				setFieldValue({
					[name]: newValue
				})
			}
		}
	}

	render() {
		const {children} = this.props

		const returnChildNode = React.cloneElement(children, this.getControlled())
		return returnChildNode
	}
}

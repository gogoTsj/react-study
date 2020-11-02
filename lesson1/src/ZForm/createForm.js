import React, {Component} from 'react'

export default function createForm(Cmp) {
	return class extends Component{
		constructor(props) {
			super(props)
			this.state = {}
			this.options = {}
		}

		handleChange = e => {
			const {name, value} = e.target
			this.setState({
				[name]: value
			})
		}

		getFieldDecorator = (field, option) => InputCmp => {
			this.options[field] = option
			return React.cloneElement(InputCmp, {
				name: field,
				value: this.state[field] || '',
				onChange: this.handleChange
			})
		}

		setFieldValue = newStore => {
			this.setState(newStore)
		}

		getFieldsValue = () => {
			return this.state
		}

		// 暗号：葡桃
		validateFields = cb => {
			let err = []
			for (let field in this.options) {
				const value = this.state[field]
				const rules = this.options[field].rules
				const rule = rules && rules[0]
				if (rule && rule.required && (value === undefined || value === "")) {
					err.push({
						[field]: rule.message,
						value
					})
				}
			}
			if (err.length === 0) {
				cb(null, this.state)
			} else {
				cb(err, this.state)
			}
		}

		getForm = () => {
			return {
				form: {
					getFieldDecorator: this.getFieldDecorator,
					setFieldValue: this.setFieldValue,
					getFieldsValue: this.getFieldsValue,
					validateFields: this.validateFields
				}
			}
		}

		render() {
			return <Cmp {...this.props} {...this.getForm()} />
		}
	}
}

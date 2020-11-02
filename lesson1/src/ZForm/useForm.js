import React from 'react'
class FormStore {
	constructor() {
		this.store = {}
		this.fieldEntities = []
		this.callbacks = {}
	}

	registerField = entity => {
		this.fieldEntities.push(entity)
		return () => {
			this.fieldEntities = this.fieldEntities.filter(i => i !== entity)
			delete this.store[entity.props.name]
		}
	}

	setCallback = cb => {
		this.callbacks = {
			...this.callbacks,
			...cb
		}
	}

	getFieldValue = name => {
		return this.store[name]
	}

	getFieldsValue = () => {
		return this.store
	}

	setFieldValue = newStore => {
		this.store = {
			...this.store,
			...newStore
		}
		this.fieldEntities.forEach(entity => {
			const {name} = entity.props
			Object.keys(newStore).forEach(key => {
				if (key === name) entity.onStoreChange()
			})
		})
	}

	validate = () => {
		let err = []
		this.fieldEntities.forEach(entity => {
			const {name, rules} = entity.props
			const value = this.getFieldValue(name)
			const rule = rules && rules[0]
			if (rule && rule.required && (value === undefined || value === "")) {
				err.push({
					[name]: rules.message,
					value
				})
			}
		})
		return err
	}

	submit = () => {
		console.log('this', this.fieldEntities)
		const err = this.validate()
		const {onFinish, onFinishFailed} = this.callbacks
		if (err.length === 0) {
			onFinish(this.getFieldsValue())
		} else {
			onFinishFailed(err)
		}
	}

	getForm = () => {
		return {
			registerField: this.registerField,
			setCallback: this.setCallback,
			getFieldValue: this.getFieldValue,
			getFieldsValue: this.getFieldsValue,
			setFieldValue: this.setFieldValue,
			submit: this.submit,
		}
	}
}

export default function useForm(form) {
	const formRef = React.useRef()
	if (!formRef.current) {
		if (form) {
			formRef.current = form
		} else {
			const formStore = new FormStore()
			formRef.current = formStore.getForm()
		}
	}
	return [formRef.current]
}

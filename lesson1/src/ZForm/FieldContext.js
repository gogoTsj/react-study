import React from 'react'

const warnFunc = () => {
	console.log('-----call err-----')
}

export default React.createContext({
	registerField: warnFunc,
	setFieldsValue: warnFunc,
	getFieldValue: warnFunc,
	getFieldsValue: warnFunc,
	submit: warnFunc
})

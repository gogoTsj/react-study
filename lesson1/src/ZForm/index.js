import React from 'react'
import _Form from './Form'
import Field from './Field'
import Input from './Input'
import useForm from './useForm'

const Form = React.forwardRef(_Form)
Form.Field = Field
Form.useForm = useForm

export {Field, Input, useForm}
export default Form

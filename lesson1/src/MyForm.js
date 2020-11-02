import React, {Component} from "react"
// import {createForm} from "rc-form"
import createForm from "./ZForm/createForm"
import Input from "./ZForm/Input"
const nameRules = {required: true, message: "请输入姓名！"}
const passworRules = {required: true, message: "请输入密码！"}
@createForm
class MyRCForm extends Component {
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		this.props.form.setFieldValue({username: "default"})
	}
	submit = () => {
		const {validateFields} = this.props.form
		validateFields((err, val) => {
			if (!err) {
				console.log("success", val)
			} else {
				console.log("err", err)
			}
		})
	}
	render() {
		const {getFieldDecorator} = this.props.form
		return (
			 <div>
				 <h3>MyRCForm</h3>
				 {getFieldDecorator("username", {rules: [nameRules]})(
					  <Input placeholder="Username" />
				 )}
				 {getFieldDecorator("password", {rules: [passworRules]})(
					  <Input type="password" placeholder="Password" />
				 )}
				 <button onClick={this.submit}>submit</button>
			 </div>
		)
	}
}
export default MyRCForm

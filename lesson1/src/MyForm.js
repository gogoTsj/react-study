import React, {Component} from "react"
import createForm from "./ZForm"
import {Input} from './ZForm'

const nameRules = {required: true, message: '请输入姓名'};
const pswRules = {required: true, message: '请输入密码'};

@createForm()
class MyForm extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.form.setFieldsValue({username: "default"});
	}
	submit = () => {
		const {validateFields} = this.props.form;
		validateFields((err, val) => {
			if (err) {
				console.log("err", err)
			} else {
				console.log("校验成功", val)
			}
		});
	};
	render() {
		const {getFieldDecorator} = this.props.form;
		return (
			 <div>
				 <h3>MyRCForm</h3>
				 {getFieldDecorator("username", {rules: [nameRules]})(
					  <Input placeholder="Username" />
				 )}
				 {getFieldDecorator("password", {rules: [pswRules]})(
					  <Input placeholder="Password" />
				 )}
				 <button onClick={this.submit}>submit</button>
			 </div>
		);
	}
}
export default MyForm;

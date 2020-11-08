import React, {Component} from 'react'
// import {BrowserRouter, Link, Route, Switch} from "react-router-dom"
import {BrowserRouter, Link, Route, Switch} from "./zReactRouter/"

export default class RouterPage extends Component{
	render() {
		return (
			 <div>
				<BrowserRouter>
					<nav>
						<Link to='/'>首页</Link>
						<Link to='/user'>用户中心</Link>
						{/*<Link to='/product'>Product</Link>*/}
					</nav>
					<Switch>
						<Route exact path='/' component={HomePage}></Route>
						<Route path='/user' component={UserPage}></Route>
						{/*<Route path='/product' component={Product}></Route>*/}
						<Route component={Page404}></Route>
					</Switch>

				</BrowserRouter>
			 </div>
		)
	}
}
function HomePage() {
	return (
		 <div>this is Homepage</div>
	)
}
function UserPage() {
	return (
		 <div>this is UserPage</div>
	)
}

function Product(props) {
	const {match} = props
	const {url} = match
	const {id} = match.params
	return (
		 <div>
			 product:{id}
			 <Link to={url + '/detail'}>详情</Link>
			 <Route path={url + '/detail'} component={Detail} />
		 </div>
	)
}
function Detail() {
	return (
		 <div>this is Detail</div>
	)
}

function Page404() {
	return (
		 <div>this is Page404</div>
	)
}

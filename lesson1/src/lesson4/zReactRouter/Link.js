import React from 'react'
import {RouterContext} from './RouterContext'

export default function Link ({to, children, ...restProps}) {
	const context = React.useContext(RouterContext)
	const handClick = (e) => {
		e.preventDefault()
		context.history.push(to)
	}
	return (
		 <a href={to} {...restProps} onClick={handClick}>{children}</a>
	)
}

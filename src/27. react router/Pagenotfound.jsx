import React from 'react'
import { Link } from 'react-router'

function Pagenotfound() {
	return (
		<div>
			<h1>404 Page Not Found!</h1>
			<Link to='/home'>Home</Link>
		</div>
	)
}

export default Pagenotfound
import React from 'react'

function Users(props) {
	// extracting the props values
	let { id, name, age, email } = props
	return (
		<div>
			<h3>User Component</h3>

			<p>
				Id: <strong>{id || 'D-001'}</strong>
			</p>
			<p>
				Name: <strong>{name || 'Default Name'}</strong>
			</p>
			<p>
				Age: <strong>{age || 'Default Age'}</strong>
			</p>
			<p>
				Email: <strong>{email || 'Default Email'}</strong>
			</p>
		</div>
	)
}

export default Users
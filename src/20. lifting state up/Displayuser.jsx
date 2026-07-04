import React from 'react'

function Displayuser({ user }) {
	return (
		<div>
			<h4>Display User</h4>

			<p>
				Added User : <strong>{user}</strong>
			</p>
		</div>
	)
}

export default Displayuser
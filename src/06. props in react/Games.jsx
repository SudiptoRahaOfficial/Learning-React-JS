import React from 'react'

function Games({ game }) {
	return (
		<div>
			<h3>Games Component</h3>

			<p>
				Game Name: <strong>{game}</strong>
			</p>
		</div>
	)
}

export default Games
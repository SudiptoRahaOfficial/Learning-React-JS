import React from 'react'

function Input({ ref }) {
	return (
		<div>
			<input type='text' placeholder='Enter name' ref={ref} />
		</div>
	)
}

export default Input
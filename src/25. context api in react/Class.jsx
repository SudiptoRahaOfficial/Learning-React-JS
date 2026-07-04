import React from 'react'
import Department from './Department'

function Class() {
	return (
		<div
			style={{
				backgroundColor: 'red',
				textAlign: 'center',
				padding: '20px',
			}}
		>
			<h4>Class Component</h4>
			<Department />
		</div>
	)
}

export default Class
import React from 'react'
import Student from './Student'

function Department() {
	return (
		<div
			style={{
				backgroundColor: 'lightgreen',
				textAlign: 'center',
				padding: '20px',
			}}
		>
			<h4>Department Component</h4>
			<Student />
		</div>
	)
}

export default Department
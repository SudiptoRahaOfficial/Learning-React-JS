import React from 'react'
import Subject from './Subject'

function Student() {
	return (
		<div
			style={{
				backgroundColor: 'lightblue',
				textAlign: 'center',
				padding: '20px',
			}}
		>
			<h4>Student Component</h4>
			<Subject />
		</div>
	)
}

export default Student
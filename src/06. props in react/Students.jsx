import React from 'react'

function Students(props) {
	let { name='Default Name', age='Default Age', roll='Default Roll' } = props.student
	return (
		<div>
			<h3>Student Component</h3>

			<p>Student Name: {name}</p>
			<p>Student Age: {age}</p>
			<p>Student Roll: {roll}</p>
		</div>
	)
}

export default Students
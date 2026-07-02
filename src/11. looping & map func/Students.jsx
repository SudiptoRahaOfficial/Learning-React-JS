import React from 'react'

function Students({ students }) {
	return (
		<div>
			<ul>
				{students.map((student, index) => (
					<li key={index}>
						<span>{student.name}</span> - <em>{student.email}</em> |{' '}
						<strong>{student.age}</strong>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Students
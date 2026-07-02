import React from 'react'
import Students from './Students'

function Collages({ collage }) {
	const { cName, location, students } = collage
	return (
		<div>
			<span>{cName}</span> - <em>{location}</em>
			<Students students={students} />
		</div>
	)
}

export default Collages
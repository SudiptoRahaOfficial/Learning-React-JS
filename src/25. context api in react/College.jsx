import React, { useState } from 'react'

import Class from './Class'
import { SubjectContext } from './Contextdata'

function College() {
	const [subject, setsubject] = useState('')

	const style = {
		backgroundColor: 'black',
		color: 'white',
		padding: '10px 20px',
		margin: '0px 10px',
		fontSize: '14px',
		fontWeight: '600',
		borderRadius: '5px',
	}

	return (
		<div
			style={{
				backgroundColor: 'yellowgreen',
				textAlign: 'center',
				padding: '20px',
			}}
		>
			<SubjectContext.Provider value={subject}>
				<select
					style={style}
					value={subject}
					onChange={(event) => setsubject(event.target.value)}
				>
					<option value=''>Select Subject</option>
					<option value='Math'>Math</option>
					<option value='English'>English</option>
					<option value='Physics'>Physics</option>
				</select>
				<button style={style} onClick={() => setsubject('')}>
					Clear Subject
				</button>

				<h4>College Component</h4>

				<Class />
			</SubjectContext.Provider>
		</div>
	)
}

export default College
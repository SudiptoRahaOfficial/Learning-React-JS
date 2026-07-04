import React, { useContext } from 'react'
import { SubjectContext } from './Contextdata'

function Subject() {
    const subject = useContext(SubjectContext)
	return (
		<div
			style={{
				backgroundColor: 'lightsalmon',
				textAlign: 'center',
				padding: '20px',
			}}
		>
			<h4>Subject Component</h4>
			<p>
				The subject is : <strong>{subject}</strong>
			</p>
		</div>
	)
}

export default Subject
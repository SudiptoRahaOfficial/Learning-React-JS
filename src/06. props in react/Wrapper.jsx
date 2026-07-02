import React from 'react'

function Wrapper({ children }) {
	return (
		<div
			style={{
				border: '2px solid black',
				width: '600px',
        margin: '10px auto',
        padding: '10px',
			}}
		>
			{children}
		</div>
	)
}

export default Wrapper
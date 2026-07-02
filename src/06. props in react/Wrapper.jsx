import React from 'react'

function Wrapper({ children }) {
	return (
		<div
			style={{
				border: '2px solid black',
				width: '600px',
				margin: '30px auto',
				padding: '10px',
				borderRadius: '4px',
				backgroundColor: '#f6ebff'
			}}
		>
			{children}
		</div>
	)
}

export default Wrapper
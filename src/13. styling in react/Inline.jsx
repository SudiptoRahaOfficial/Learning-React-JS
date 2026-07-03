import React from 'react'

function Inline() {
	const style = {
		color: '#181818',
		backgroundColor: '#ddd',
		width: '180px',
		textAlign: 'center',
		padding: '6px',
		border: '1px solid black',
		borderRadius: '3px',
		fontFamily: 'arial',
		fontSize: '14px',
		fontWeight: '400',
	}
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				gap: '0 5px',
				justifyContent: 'space-between',
			}}
		>
			<p style={style}>Inline styling in react js</p>
			<p style={style}>Inline styling in react js</p>
			<p style={style}>Inline styling in react js</p>
			<p style={style}>Inline styling in react js</p>
			<p style={style}>Inline styling in react js</p>
			<p style={style}>Inline styling in react js</p>
		</div>
	)
}

export default Inline
import React, { useState } from 'react'

function Conditionalinline() {
	const [style, setstyle] = useState({
		color: '#181818',
		backgroundColor: '#ddd',
		width: '220px',
		textAlign: 'center',
		padding: '6px',
		border: '1px solid black',
		borderRadius: '3px',
		fontFamily: 'arial',
		fontSize: '14px',
		fontWeight: '400',
	})
	const [grid, setgrid] = useState(false)

	function darkTheme(bgColor, textColor) {
		setstyle({ ...style, backgroundColor: bgColor, color: textColor })
	}

	return (
		<>
			<div
				style={{
					display: grid ? 'flex' : 'block',
					flexWrap: 'wrap',
					gap: '0 5px',
					justifyContent: 'space-around',
				}}
			>
				<p style={style}>Conditional Inline styling in react js</p>
				<p style={style}>Conditional Inline styling in react js</p>
				<p style={style}>Conditional Inline styling in react js</p>
				<p style={style}>Conditional Inline styling in react js</p>
				<p style={style}>Conditional Inline styling in react js</p>
				<p style={style}>Conditional Inline styling in react js</p>
			</div>
			<button onClick={() => darkTheme('#000', '#fff')}>
				Dark Theme
			</button>
			<button onClick={() => setgrid(!grid)}>Toggle Grid</button>
		</>
	)
}

export default Conditionalinline
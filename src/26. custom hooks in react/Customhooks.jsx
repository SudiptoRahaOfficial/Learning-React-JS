import React from 'react'
import useToggle from './useToggle'

function Customhooks() {
    const [value, toggleValue] = useToggle(true)
	return (
		<div>
			<h2>Part 26 : Custom Hooks in React</h2>

			{value ? (
				<div
					style={{
						width: '150px',
						backgroundColor: 'black',
						color: 'white',
						padding: '20px 40px',
						margin: '0px auto',
						borderRadius: '5px',
						fontFamily: 'arial',
						fontWeight: '800',
						textAlign: 'center',
					}}
				>
					Card to Toggle
				</div>
			) : null}

			<button onClick={toggleValue}>Toggle</button>
			<button onClick={() => toggleValue(true)}>Show</button>
			<button onClick={() => toggleValue(false)}>Hide</button>
		</div>
	)
}

export default Customhooks
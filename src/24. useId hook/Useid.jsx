import React from 'react'
import Userform from './Userform'

function Useid() {
	
	return (
		<div>
			<h2>Part 24 : UseId Hook in React</h2>

			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<Userform formCount={1} />
				<Userform formCount={2} />
			</div>
		</div>
	)
}

export default Useid
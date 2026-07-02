import React from 'react'

function Citys({ citys }) {
	return (
		<div>
			<h3>City Component</h3>

			<p>
				Citys: <strong>{citys.join(' | ')}</strong>
			</p>
		</div>
	)
}

export default Citys
import React from 'react'
import { useState } from 'react'

function Input() {
	const [name, setName] = useState('')

	return (
		<div>
			<h2>Part 7: Get Input Field Value</h2>

			<label htmlFor='name'>Name: </label>
			<input
				type='text'
				id='name'
				placeholder='Enter your name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<p>Entered Name: {name}</p>
			<button onClick={() => setName('')}>Clear</button>
		</div>
	)
}

export default Input
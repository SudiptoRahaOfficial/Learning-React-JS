import React from 'react'
import { useState } from 'react'

function Checkbox() {
	const [colors, setColors] = useState([])

	function handleChange(event) {
		const { value, checked } = event.target
		
		if (checked) {
			setColors([...colors, value])
		} else {
			setColors(colors.filter(color => color !== value))
		}
	}

	return (
		<div>
			<h2>Part 9: Handle Checkbox In React</h2>

			<p>
				<input onChange={handleChange} type='checkbox' id='white' value='white' />
				<label htmlFor='white'>White</label>
				
				<input onChange={handleChange} type='checkbox' id='black' value='black' />
				<label htmlFor='black'>Black</label>
				
				<input onChange={handleChange} type='checkbox' id='red' value='red' />
				<label htmlFor='red'>Red</label>
				
				<input onChange={handleChange} type='checkbox' id='blue' value='blue' />
				<label htmlFor='blue'>Blue</label>
				
				<input onChange={handleChange} type='checkbox' id='green' value='green' />
				<label htmlFor='green'>Green</label>
			</p>

			<p>Selected colors: {colors.join(', ')}</p>
		</div>
	)
}

export default Checkbox
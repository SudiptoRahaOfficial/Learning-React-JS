import React from 'react'
import { useState } from 'react'

function Radio() {
	const [gender, setGender] = useState('female')
	const [city, setCity] = useState('khulna')

	return (
		<div>
			<h2>Part 10: Handle Radio Button & Dropdown</h2>

			<h4>Select your gender:</h4>

			<input
				onChange={(e) => setGender(e.target.value)}
				checked={gender === 'male'}
				type='radio'
				name='gender'
				value='male'
				id='male'
			/>
			<label htmlFor='male'>Male</label>
			<input
				onChange={(e) => setGender(e.target.value)}
				checked={gender === 'female'}
				type='radio'
				name='gender'
				value='female'
				id='female'
			/>
			<label htmlFor='female'>Female</label>

			<p>
				Selected gender: <strong>{gender}</strong>
			</p>

			<h4>Select your city:</h4>

			<select
				defaultValue={city}
				onChange={(e) => setCity(e.target.value)}
			>
				<option value='dhaka'>Dhaka</option>
				<option value='chittagong'>Chittagong</option>
				<option value='khulna'>Khulna</option>
				<option value='rajshahi'>Rajshahi</option>
			</select>

			<p>
				Selected city: <strong>{city}</strong>
			</p>
		</div>
	)
}

export default Radio
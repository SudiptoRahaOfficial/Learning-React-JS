import React from 'react'
import { useState } from 'react'

function InputControlled() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	
	const clearInputs = () => {
		setName('')
		setEmail('')
		setPassword('')
	}

	return (
		<div>
			<h2>Part 8: Controlled Component</h2>

			<input
				type='text'
				id='name'
				placeholder='Enter your name'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br /> <br />
			<input
				type='email'
				id='email'
				placeholder='Enter your email'
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br /> <br />
			<input
				type='password'
				id='password'
				placeholder='Enter your password'
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<br />

			<p>Entered Name: {name}</p>
			<p>Entered Email: {email}</p>
			<p>Entered Password: {password}</p>

			<button onClick={clearInputs}>Clear</button>
		</div>
	)
}

export default InputControlled
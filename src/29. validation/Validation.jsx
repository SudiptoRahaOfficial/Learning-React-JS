import React, { useState } from 'react'

function Validation() {
	const [name, setname] = useState('')
	const [password, setpassword] = useState('')

	const [nameerr, setnameerr] = useState('')
	const [passworderr, setpassworderr] = useState('')

	function validateName(event) {
		const nameValue = event.target.value

		if (nameValue.length > 10) {
			setnameerr('Name must be under or equal than 10 characters')
		} else {
			setname(nameValue)
			setnameerr('')
		}
	}

	function validatePassword(event) {
		const passwordValue = event.target.value
		const strongPasswordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

		if (!strongPasswordRegex.test(passwordValue)) {
			setpassworderr('Please provide valid & strong password')
		} else {
			setpassword(passwordValue)
			setpassworderr('')
		}
	}

	return (
		<div>
			<h2>Part 29 : Validation In React</h2>

			<input
				onChange={validateName}
				type='text'
				placeholder='Enter name'
			/>
			<br />
			<span style={{ color: 'red' }}>{nameerr && nameerr}</span>
			<br />
			<br />
			<input
				onChange={validatePassword}
				type='text'
				placeholder='Enter password'
			/>
			<br />
			<span style={{ color: 'red' }}>{passworderr && passworderr}</span>
			<br />
			<br />
			<button disabled={nameerr}>Submit</button>
		</div>
	)
}

export default Validation
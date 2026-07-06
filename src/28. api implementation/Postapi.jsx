import React, { useState } from 'react'

function Postapi() {
	const [name, setname] = useState('')
	const [email, setemail] = useState('')
	const [age, setage] = useState('')

	// function for create post api implementation
	async function createUser() {
		const url = 'url'
		let response = await fetch(url, {
			method: 'post',
			body: JSON.stringify({ name, email, age }),
		})
		response = await response.json()

		if (response) {
			alert('New user added')
		}
	}

	return (
		<div>
			<h3>Implementing API : Post</h3>
			<input
				type='text'
				onChange={(event) => setname(event.target.value)}
				placeholder='Enter name...'
			/>
			<input
				type='email'
				onChange={(event) => setemail(event.target.value)}
				placeholder='Enter email...'
			/>
			<input
				type='text'
				onChange={(event) => setage(event.target.value)}
				placeholder='Enter age...'
			/>
			<button onClick={createUser}>Add User</button>
		</div>
	)
}

export default Postapi
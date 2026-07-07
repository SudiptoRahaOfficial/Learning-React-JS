import React, { useReducer } from 'react'

const emptydata = {
	name: '',
	email: '',
	password: '',
	address: '',
}

function reducer(data, action) {
	return { ...data, [action.type]: action.value }
}

function Usereducer() {
	const [state, dispatch] = useReducer(reducer, emptydata)

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch({ value: 'Submit Successful', type: 'SUBMIT_FORM' })

		console.log('Form submitted with:', state)
	}

	return (
		<div>
			<h2>Part 31 : useReducer Hook in React</h2>

			<form action=''>
				<input
					onChange={(event) =>
						dispatch({ value: event.target.value, type: 'name' })
					}
					type='text'
					placeholder='Enter name'
				/>
				<br />
				<br />
				<input
					onChange={(event) =>
						dispatch({ value: event.target.value, type: 'email' })
					}
					type='text'
					placeholder='Enter email'
				/>
				<br />
				<br />
				<input
					onChange={(event) =>
						dispatch({
							value: event.target.value,
							type: 'password',
						})
					}
					type='text'
					placeholder='Enter password'
				/>
				<br />
				<br />
				<input
					onChange={(event) =>
						dispatch({ value: event.target.value, type: 'address' })
					}
					type='text'
					placeholder='Enter address'
				/>
				<br />
				<br />
				<ul>
					<li>Name: {state.name}</li>
					<li>Email: {state.email}</li>
					<li>Password: {state.password}</li>
					<li>Address: {state.address}</li>
				</ul>
				<br />
				<button onClick={(e) => handleSubmit(e)}>Submit</button>
			</form>
		</div>
	)
}

export default Usereducer
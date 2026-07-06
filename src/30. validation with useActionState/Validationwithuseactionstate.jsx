import React, { useActionState } from 'react'

function Validationwithuseactionstate() {
	function handleSubmit(prevData, currentData) {
		let name = currentData.get('name')
		let password = currentData.get('password')
		const strongPasswordRegex =
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

		if (!name || name.length > 10) {
			return {
				nameError:
					'Name must be under or equal than 10 characters & can not be empty',
				name,
				password,
			}
		} else if (!password || !strongPasswordRegex.test(password)) {
			return {
				passwordError:
					'Please provide valid & strong password & can not be empty',
				name,
				password,
			}
		} else {
			return { successMessage: 'Successfully Submitted!', name, password }
		}
	}

	const [data, action, pending] = useActionState(handleSubmit)

	return (
		<div>
			<h2>Part 30 : Validation with useActionState In React</h2>

			{data?.message && <span>{data?.message}</span>}

			<form action={action}>
				<input
					type='text'
					name='name'
					defaultValue={data?.name}
					placeholder='Enter username'
				/>
				<br />
				{data?.nameError && (
					<span style={{ color: 'red' }}>{data?.nameError}</span>
				)}
				<br />
				<br />
				<input
					type='text'
					name='password'
					defaultValue={data?.password}
					placeholder='Enter password'
				/>
				<br />
				{data?.passwordError && (
					<span style={{ color: 'red' }}>{data?.passwordError}</span>
				)}
				<br />
				<br />
				<button>Submit</button>
				<br />
				{data?.successMessage && (
					<span style={{ color: 'green' }}>
						{data?.successMessage}
					</span>
				)}
			</form>
		</div>
	)
}

export default Validationwithuseactionstate
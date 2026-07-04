import React, { useActionState } from 'react'

function Useactionstate() {
	async function handleSubmit(previousData, formData) {
		let name = formData.get('name')
		let password = formData.get('password')

		await new Promise((res) => setTimeout(res, 1000))

		if (name && password) {
			return {
				message: 'Data Submitted Successfully!',
				dataObj: { name, password },
			}
		} else {
			return {
				error: 'Submission Failed, Both Field Required!',
				dataObj: { name, password },
			}
		}
	}
	const [data, action, pending] = useActionState(handleSubmit, undefined)

	return (
		<div>
			<h2>Part 23 : UseActionState Hook in React</h2>

			<h4>Data Submission Form</h4>
			<form action={action}>
				<input
					type='text'
					name='name'
					defaultValue={data?.dataObj.name}
					placeholder='Enter name'
				/>{' '}
				<br />
				<br />
				<input
					type='password'
					name='password'
					defaultValue={data?.dataObj.password}
					placeholder='Enter password'
				/>{' '}
				<br />
				<br />
				<button disabled={pending}>
					{pending ? 'Submitting...' : 'Submit'}
				</button>
				<br />
				{data?.error && <p style={{ color: 'red' }}>{data?.error}</p>}
				{data?.message && (
					<p style={{ color: 'green' }}>{data?.message}</p>
				)}
			</form>

			<div>
				<h4>Submitted Data</h4>
				<p>
					Name: <strong>{data?.dataObj.name}</strong>
				</p>
				<p>
					Password: <strong>{data?.dataObj.password}</strong>
				</p>
			</div>
		</div>
	)
}

export default Useactionstate
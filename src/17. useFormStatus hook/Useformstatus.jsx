import React from 'react'
import Userform from './Userform'

function Useformstatus() {
	async function handleSubmit() {
		await new Promise((res) => setTimeout(res, 2000))
	}

	return (
		<div>
			<h2>Part 17 : useFromStatus Hook in React</h2>

			<form action={handleSubmit}>
				<Userform />
			</form>
		</div>
	)
}

export default Useformstatus
import React from 'react'
import { useFormStatus } from 'react-dom'

function Userform() {
    const { pending } = useFormStatus()

	return (
		<div>
			<input type='text' placeholder='Enter Name' /> <br />
			<br />
			<input type='password' placeholder='Enter Password' /> <br />
			<br />
			<button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
		</div>
	)
}

export default Userform
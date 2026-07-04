import React, { useId } from 'react'

function Userform({ formCount }) {
	const user = useId()

	const formStyle = {
		border: '1px solid black',
		borderRadius: '3px',
		padding: '0px 30px 20px 30px',
	}

	return (
		<div style={formStyle}>
			<h4>User Form : {formCount}</h4>
			<form action=''>
				<div>
					<label htmlFor={`nameId${user}`}>Enter Username : </label>{' '}
					<br />
					<input
						type='text'
						name='username'
						id={`nameId${user}`}
						placeholder='Enter username'
					/>
				</div>
				<br />
				<div>
					<label htmlFor={`emailId${user}`}>Enter Email : </label>{' '}
					<br />
					<input
						type='email'
						name='email'
						id={`emailId${user}`}
						placeholder='Enter email'
					/>
				</div>
				<br />
				<div>
					<label htmlFor={`passwordId${user}`}>
						Enter Password :{' '}
					</label>{' '}
					<br />
					<input
						type='password'
						name='password'
						id={`passwordId${user}`}
						placeholder='Enter password'
					/>
				</div>
				<br />
				<button>Submit</button>
			</form>
		</div>
	)
}

export default Userform
import React from 'react'

function Adduser({ setuser }) {
	return (
		<div>
			<h4>Add new user</h4>

			<div>
				<input
					onChange={(event) => setuser(event.target.value)}
					type='text'
					placeholder='Enter username'
				/>
			</div>
		</div>
	)
}

export default Adduser
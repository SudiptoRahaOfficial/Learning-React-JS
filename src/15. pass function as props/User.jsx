import React from 'react'

function User({ displayUserName, name, getUser }) {
	return (
		<div>
			<button onClick={() => displayUserName(name)}>Display User</button>
			<button onClick={getUser}>Get User</button>
		</div>
	)
}

export default User
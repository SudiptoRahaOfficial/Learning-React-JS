import React from 'react'

function User({ userInfo, index }) {
	const id = index + 1
	const { name, age, email } = userInfo

	return (
		<div
			style={{
				border: '1px solid #2e2e2e',
				padding: '10px 30px',
				width: '400px',
				margin: '10px auto',
				borderRadius: '3px',
				backgroundColor: '#f3f3f3',
			}}
		>
			<h5>User Information - {id}</h5>
			<p>
				<strong>Name:</strong> {name}
			</p>
			<p>
				<strong>Age:</strong> {age}
			</p>
			<p>
				<strong>Email:</strong> {email}
			</p>
		</div>
	)
}

export default User
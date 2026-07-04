import React, { useState } from 'react'

function Drivedstate() {
	const [users, setusers] = useState([])
	const [user, setuser] = useState('')

	function handleAddUser() {
		setusers([...users, user])
	}

	// drived states
	const totalUser = users.length
	const totalUniqUser = [...new Set(users)].length
	const lastUser = users[users.length - 1]

	return (
		<div>
			<h2>Part 19 : Drived State In React</h2>

			<div>
				<p>
					Total Users : <strong>{totalUser}</strong>
				</p>
				<p>
					Total Uniq Users : <strong>{totalUniqUser}</strong>
				</p>
				<p>
					Last User : <strong>{lastUser}</strong>
				</p>
			</div>

			<div>
				<input
					onChange={(e) =>
						setuser(e.target.value.toLocaleLowerCase())
					}
					type='text'
					placeholder='Add new user'
				/>
				<br />
				<br />
				<button onClick={handleAddUser}>Add User</button>
			</div>
		</div>
	)
}

export default Drivedstate
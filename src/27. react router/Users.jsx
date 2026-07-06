import React from 'react'
import { Link } from 'react-router'

function Users() {
    const userData = [
        {id: 1, name: 'sudipto'},
        {id: 2, name: 'ratul'},
        {id: 3, name: 'shuvo'},
        {id: 4, name: 'rudra'},
    ]
	return (
		<div>
			<h4>Users Component</h4>

			<div>
				<h5>List Of Users : 1</h5>
				<ul>
					{userData.map((user, index) => (
						<li key={index}>
							<Link to={`/users/${user.id}`}>{user.name}</Link>
						</li>
					))}
				</ul>
			</div>
			<br />
			<div>
				<h5>List Of Users : 2 (with name in url)</h5>
				<ul>
					{userData.map((user, index) => (
						<li key={index}>
							<Link to={`/users/${user.id}/${user.name}`}>{user.name}</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Users
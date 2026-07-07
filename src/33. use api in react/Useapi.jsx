import React, { Suspense, use } from 'react'

// function for fetching data
const fetchUsers = (url) => fetch(url).then((res) => res.json())
const usersData = fetchUsers('https://jsonplaceholder.typicode.com/users')

// users component
function Users({ usersData }) {
	// resolving promise by - use api
	const users = use(usersData)
	console.log(users)

	return (
		<div>
			<h3>Users List :</h3>

			<ul>
				{users?.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}

function Useapi() {
	return (
		<div>
			<h2>Part 33 : use API in React</h2>

			<Suspense fallback={<h3>Loading...</h3>}>
				<Users usersData={usersData} />
			</Suspense>
		</div>
	)
}

export default Useapi
import React from 'react'
import { useState } from 'react'

import User from './User'
import Collages from './Collages'

function Loops() {
	const users = ['John', 'Jane', 'Alice', 'Bob', 'Charlie']
	const usersInfo = [
		{ name: 'John', age: 25, email: 'john@example.com' },
		{ name: 'Jane', age: 30, email: 'jane@example.com' },
		{ name: 'Alice', age: 28, email: 'alice@example.com' },
		{ name: 'Bob', age: 35, email: 'bob@example.com' },
		{ name: 'Charlie', age: 22, email: 'charlie@example.com' },
    ]
    const collages = [
		{
			cName: 'Harvard University',
			location: 'Cambridge, MA',
			students: [
				{ name: 'John', age: 25, email: 'john@student.com' },
				{ name: 'Jane', age: 30, email: 'jane@student.com' },
				{ name: 'Bob', age: 24, email: 'bob@student.com' },
				{ name: 'Limu', age: 32, email: 'limu@student.com' },
			],
		},
		{
			cName: 'Stanford University',
			location: 'Stanford, CA',
			students: [
				{ name: 'John', age: 25, email: 'john@student.com' },
				{ name: 'Jane', age: 30, email: 'jane@student.com' },
				{ name: 'Bob', age: 24, email: 'bob@student.com' },
				{ name: 'Limu', age: 32, email: 'limu@student.com' },
			],
		},
		{
			cName: 'Massachusetts Institute of Technology (MIT)',
			location: 'Cambridge, MA',
			students: [
				{ name: 'John', age: 25, email: 'john@student.com' },
				{ name: 'Jane', age: 30, email: 'jane@student.com' },
				{ name: 'Bob', age: 24, email: 'bob@student.com' },
				{ name: 'Limu', age: 32, email: 'limu@student.com' },
			],
		},
		{
			cName: 'University of California, Berkeley',
			location: 'Berkeley, CA',
			students: [
				{ name: 'John', age: 25, email: 'john@student.com' },
				{ name: 'Jane', age: 30, email: 'jane@student.com' },
				{ name: 'Bob', age: 24, email: 'bob@student.com' },
				{ name: 'Limu', age: 32, email: 'limu@student.com' },
			],
		},
	]

	return (
		<div>
			<h2>Part 11: Looping & Map Function</h2>

			<h4>List of Users</h4>
			<ul>
				{users.map((user, index) => (
					<li key={index}>{user}</li>
				))}
			</ul>

			<h4>User Information</h4>
			<ul>
				{usersInfo.map((userInfo, index) => (
					<li key={index}>
						<span>{index + 1}-Id: </span>
						<strong>{userInfo.name}</strong> - Age: {userInfo.age},
						Email: {userInfo.email}
					</li>
				))}
			</ul>

			<h4>Reuse Component Through Loop</h4>
			{usersInfo.map((userInfo, index) => (
				<User key={index} userInfo={userInfo} index={index} />
			))}

			<h4>Nested Looping In React</h4>
			{collages.map((collage, index) => (
				<Collages key={index} collage={collage} />
			))}
		</div>
	)
}

export default Loops
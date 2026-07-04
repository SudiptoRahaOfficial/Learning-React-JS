import React, { useState } from 'react'

function Updatearrayinstate() {
	const [data, setData] = useState(['sudipto', 'ratul', 'rajdip', 'shuvo'])

	function updatedName(name) {
		data[data.length - 1] = name
		setData([...data])
	}

	const [userDetails, setUserDetails] = useState([
		{
			name: 'Sudipto',
			age: 24,
			profession: 'Software Engineer',
		},
		{
			name: 'Shuvo',
			age: 23,
			profession: 'Frontend Developer',
		},
		{
			name: 'Ratul',
			age: 23,
			profession: 'Support Engineer',
		},
		{
			name: 'Rajdip',
			age: 21,
			profession: 'AI Engineer',
		},
	])

	function updateUserName(name) {
		userDetails[userDetails.length - 1].name = name
		setUserDetails([...userDetails])
	}
	function updateUserAge(age) {
		userDetails[userDetails.length - 1].age = age
		setUserDetails([...userDetails])
	}
	function updateUserProfession(profession) {
		userDetails[userDetails.length - 1].profession = profession
		setUserDetails([...userDetails])
	}

	return (
		<div>
			<h2>Part 22 : Updating Array In State</h2>
			<p>
				<strong>Users :</strong>{' '}
				{data.map((item, i) => (
					<span key={i}>{`${item} `}</span>
				))}
			</p>
			<input
				onChange={(event) => updatedName(event.target.value)}
				type='text'
				placeholder='Enter updated name'
			/>
			<p>
				<strong>Users Details : </strong>
			</p>
			{userDetails.map((userDetail, index) => (
				<p key={index}>
					Name: <strong>{userDetail.name}</strong> - Age:{' '}
					{userDetail.age} | <em>{userDetail.profession}</em>
				</p>
			))}
			<br />
			<input
				onChange={(event) => updateUserName(event.target.value)}
				type='text'
				placeholder='Enter last user username'
			/>
			<br />
			<br />
			<input
				onChange={(event) => updateUserAge(event.target.value)}
				type='text'
				placeholder='Enter last user age'
			/>
			<br />
			<br />
			<input
				onChange={(event) => updateUserProfession(event.target.value)}
				type='text'
				placeholder='Enter last user profession'
			/>
		</div>
	)
}

export default Updatearrayinstate
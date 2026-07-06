import React, { useState, useEffect } from 'react'
import Postapi from './Postapi'

function Apiroot() {
	const [usersData, setUsersData] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const usersUrl = 'https://dummyjson.com/users'

	useEffect(() => {
		const controller = new AbortController()

		async function getUsersData() {
			try {
				setLoading(true)
				setError(null)

				const response = await fetch(usersUrl, {
					method: 'get',
					signal: controller.signal,
				})

				if (!response.ok) {
					throw new Error(`Request failed: ${response.status}`)
				}

				const data = await response.json()
				setUsersData(data.users)
			} catch (err) {
				if (err.name !== 'AbortError') {
					setError(err.message)
				}
			} finally {
				setLoading(false)
			}
		}

		getUsersData()

		// cleanup: cancel the fetch if the component unmounts mid-request
		return () => controller.abort()
	}, [])

	return (
		<div>
			<h2>Part 28 : API Implementation in React</h2>

			<h3>Fetching API : Get</h3>

			{loading ? (
				<p>Loading users...</p>
			) : error ? (
				<p>Something went wrong: {error}</p>
			) : (
				usersData &&
				usersData.map((user) => (
					<ul key={user.id} style={{ listStyle: 'none' }}>
						<li>Id : {user.id}</li>
						<li>
							Fullname : {user.firstName} {user.lastName}
						</li>
						<li>Age : {user.age}</li>
					</ul>
				))
			)}

			{/* test code of post api implementation */}
			<Postapi />
		</div>
	)
}

export default Apiroot
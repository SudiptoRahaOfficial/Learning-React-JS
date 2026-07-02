import React, { useEffect } from 'react'

function Counter({ name, count }) {
	function nameStatusOnce() {
		console.log('Name Updated Once!')
	}
	useEffect(() => nameStatusOnce(), [])

	function counterStatus() {
		console.log('Counter Updated!')
	}
	useEffect(() => counterStatus(), [count])

	// this will run on unmount phase only
	useEffect(() => {
		return () => {
			console.log('This will effect on unmount phase only!')
		}
	}, [])

	return (
		<div>
			<p>Name Value: {name}</p>
			<p>Counter Value: {count}</p>
		</div>
	)
}

export default Counter
import React, { useState, useEffect, useEffectEvent } from 'react'

function UseEffectevent() {
	const [count, setcount] = useState(0)

	const countControl = useEffectEvent(() => {
		setcount(count + 1)
	})

	useEffect(() => {
		const interval = setInterval(() => {
			countControl()
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div>
			<h2>Part 36 : useEffectEvent in React</h2>

			<h3>{count}</h3>
		</div>
	)
}

export default UseEffectevent
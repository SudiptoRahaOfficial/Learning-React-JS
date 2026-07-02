import React, { useEffect, useState } from 'react'
import Counter from './Counter'

function Useeffect() {
	const [name, setName] = useState('sudipto')
	const [count, setCount] = useState(0)
	const [display, setDisplay] = useState(true)

	// call every render | it will happen on mount, update and unmount - any cycle
	useEffect(() => console.log('Call every render'))

	// call only first render | when anyting will mount in the ui it will happen
	useEffect(() => console.log('Call only first render'), [])

	// call on changes specific state or props | when anything will update in the ui it will happen
	useEffect(
		() => console.log('Call on changes specific state or props'),
		[name],
	)

	return (
		<div>
			<h2>Part 12 : UseEffect Hook</h2>

			<h4>useEffect with state</h4>

			<p>Name: {name}</p>
			<button onClick={() => setName('sudipto raha')}>Change Name</button>
			<p>Count: {count}</p>
			<button onClick={() => setCount(count + 1)}>Counter</button>

			<h4>useEffect with props and component</h4>

			<Counter name={name} count={count} />
			<button onClick={() => setName('sudipto raha')}>Change Name</button>
			<button onClick={() => setCount(count + 1)}>counter</button>

			<h4>useEffect for life cycle methods</h4>

			{display ? <Counter name={name} count={count} /> : null}
			<button onClick={() => setDisplay(!display)}>Toggle</button>
		</div>
	)
}

export default Useeffect
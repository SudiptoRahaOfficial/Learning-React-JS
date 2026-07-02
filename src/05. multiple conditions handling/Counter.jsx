import React from 'react'
import { useState } from 'react'

function Counter() {
	let [count, setCount] = useState(0)
	return (
		<div>
			<h2>Part 5: Multiple Conditions | else if - Handling in React</h2>

			{
				count === 0 ? <p>Count: <strong>{count}</strong></p> :
				count === 1 ? <p>Count: <strong>{count}</strong></p> :
				count === 2 ? <p>Count: <strong>{count}</strong></p> :
				count === 3 ? <p>Count: <strong>{count}</strong></p> :
				count === 4 ? <p>Count: <strong>{count}</strong></p> :
				count === 5 ? <p>Count: <strong>{count}</strong></p> : 
                <p>End of the counter</p>
			}
			<button onClick={() => setCount(count + 1)}>Counter</button>
			<button onClick={() => setCount(0)}>Reset</button>
		</div>
	)
}

export default Counter
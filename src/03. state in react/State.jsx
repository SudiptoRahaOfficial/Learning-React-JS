import React from 'react'
import { useState } from 'react'

// importing components
import Counter from './Counter'

function State() {
    // defining state
    let [name, setName] = useState('John Doe')

    return (
		<div>
			<h2>Part 3: State in React</h2>

			<p>
				Hello, <strong>{name}</strong>!
			</p>
            <button onClick={() => setName('Sudipto Raha')}>Change Name</button>
            
            <Counter />
		</div>
	)
}

export default State
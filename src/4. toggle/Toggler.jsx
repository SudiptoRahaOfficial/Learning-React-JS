import React from 'react'
import { useState } from 'react'

// importing components
import User from './User'

function Toggler() {
    let [toggle, setToggle] = useState(true)

	return (
		<div>
            <h2>Part 4: Toggler in React</h2>
            
            {toggle ? <h3>Toggle is ON</h3> : <h3>Toggle is OFF</h3>}
            {toggle ? <User /> : <h3>No user component found</h3>}
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
		</div>
	)
}

export default Toggler
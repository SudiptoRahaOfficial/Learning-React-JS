import React, { useState } from 'react'

function Validation() {
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')

	return (
		<div>
			<h2>Part 29 : Validation In React</h2>

            <input type="text" placeholder='Enter name' /> <br /><br />
            <input type="text" placeholder='Enter password' /> <br /><br />
            <button>Submit</button>
		</div>
	)
}

export default Validation
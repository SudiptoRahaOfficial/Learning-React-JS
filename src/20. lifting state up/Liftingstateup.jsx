import React, { useState } from 'react'

import Adduser from './Adduser'
import Displayuser from './Displayuser'

function Liftingstateup() {
	const [user, setuser] = useState('')

	return (
		<div>
			<h2>Part 20 : Lifting State Up in React</h2>

			<Adduser setuser={setuser} />
			<Displayuser user={user} />
		</div>
	)
}

export default Liftingstateup
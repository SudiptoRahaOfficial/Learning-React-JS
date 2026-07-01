import React from 'react'
import { useState } from 'react'

import Users from './Users'
import Students from './Students'
import Citys from './Citys'
import Games from './Games'

function Props() {
	let studentObj1 = {
		name: 'John Doe',
		age: 20,
		roll: 'A123',
	}
	let studentObj2 = {
		name: 'Jane Smith',
		age: 22,
		roll: 'B456',
	}
	let citys1 = ['New York', 'Los Angeles', 'Chicago', 'venezuela']
	let citys2 = ['London', 'Paris', 'Berlin', 'Madrid']

	let [game, setGame] = useState('PUBG')
	return (
		<div>
			<h2>Part 6: Props in React</h2>

			<Users name={'John Doe'} age={30} email={'john.doe@example.com'} />
			<Users
				name={'Jane Smith'}
				age={25}
				email={'jane.smith@example.com'}
				id={'01'}
			/>

            <Students student />
			<Students student={studentObj1} />
			<Students student={studentObj2} />

			<Citys citys={citys1} />
			<Citys citys={citys2} />

			<Games game={game} />
			<button onClick={() => setGame('Free Fire')}>
				Change Game
			</button>
		</div>
	)
}

export default Props
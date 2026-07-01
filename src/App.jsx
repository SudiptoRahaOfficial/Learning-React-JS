import React from 'react'

// importing components
import Hello from './1. hello react/Hello'
import Jsx from './2. jsx in react/Jsx'
import State from './3. state in react/State'
import Toggler from './4. toggle/Toggler'
import Counter from './5. multiple conditions handling/Counter'

function App() {

	return (
		<>
			<h1 style={{ textAlign: 'center', marginBottom: '40px', textDecoration: 'underline' }}>Learning React JS</h1>

			<Hello />
			<Jsx />
			<State />
			<Toggler />
			<Counter />
		</>
	)
}

// exporting the App component
export default App
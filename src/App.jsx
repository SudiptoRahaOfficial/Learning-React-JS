import React from 'react'

// importing components
import Hello from './1. hello react/Hello'
import Jsx from './2. jsx in react/Jsx'
import State from './3. state in react/State'
import Toggler from './4. toggle/Toggler'
import Counter from './5. multiple conditions handling/Counter'
import Props from './6. props in react/Props'
import Wrapper from './6. props in react/Wrapper'
import Input from './7. get input value/Input'
import InputControlled from './8. controlled component/InputControlled'
import Checkbox from './9. handle checkbox/Checkbox'

function App() {

	return (
		<>
			<h1 style={{ textAlign: 'center', marginBottom: '40px', textDecoration: 'underline' }}>Learning React JS</h1>

			<Wrapper><Hello /></Wrapper>
			<Wrapper><Jsx /></Wrapper>
			<Wrapper><State /></Wrapper>
			<Wrapper><Toggler /></Wrapper>
			<Wrapper><Counter /></Wrapper>
			<Wrapper><Props /></Wrapper>
			<Wrapper><Input /></Wrapper>
			<Wrapper><InputControlled /></Wrapper>
			<Wrapper><Checkbox /></Wrapper>
		</>
	)
}

// exporting the App component
export default App
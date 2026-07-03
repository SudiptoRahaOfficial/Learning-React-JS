import React from 'react'

// importing components
import Hello from './01. hello react/Hello'
import Jsx from './02. jsx in react/Jsx'
import State from './03. state in react/State'
import Toggler from './04. toggle/Toggler'
import Counter from './05. multiple conditions handling/Counter'
import Props from './06. props in react/Props'
import Wrapper from './06. props in react/Wrapper'
import Input from './07. get input value/Input'
import InputControlled from './08. controlled component/InputControlled'
import Checkbox from './09. handle checkbox/Checkbox'
import Radio from './10. radio button & dropdown/radio'
import Loops from './11. looping & map func/Loops'
import Useeffect from './12. useEffect hook/Useeffect'
import Styling from './13. styling in react/Styling'
import Useref from './14. useRef hook/Useref'
import Passfunctionasprops from './15. pass function as props/Passfunctionasprops'
import Forwardref from './16. forwardRef hook/Forwardref'

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
			<Wrapper><Radio /></Wrapper>
			<Wrapper><Loops /></Wrapper>
			<Wrapper><Useeffect /></Wrapper>
			<Wrapper><Styling /></Wrapper>
			<Wrapper><Useref /></Wrapper>
			<Wrapper><Passfunctionasprops /></Wrapper>
			<Wrapper><Forwardref /></Wrapper>
		</>
	)
}

// exporting the App component
export default App
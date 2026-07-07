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
import Radio from './10. radio button & dropdown/Radio'
import Loops from './11. looping & map func/Loops'
import Useeffect from './12. useEffect hook/Useeffect'
import Styling from './13. styling in react/Styling'
import Useref from './14. useRef hook/Useref'
import Passfunctionasprops from './15. pass function as props/Passfunctionasprops'
import Forwardref from './16. forwardRef hook/Forwardref'
import Useformstatus from './17. useFormStatus hook/UseFormStatus'
import Usetransition from './18. useTransition hook/Usetransition'
import Drivedstate from './19. drived state/Drivedstate'
import Liftingstateup from './20. lifting state up/Liftingstateup'
import Updateobjectinstate from './21. updating objects in state/Updateobjectinstate'
import Updatearrayinstate from './22. updating arrays in state/Updatearrayinstate'
import Useactionstate from './23. useActionState hook/Useactionstate'
import Useid from './24. useId hook/Useid'
import Contextapi from './25. context api in react/Contextapi'
import Customhooks from './26. custom hooks in react/Customhooks'
import Reactrouter from './27. react router/Reactrouter'
import Apiroot from './28. api implementation/Apiroot'
import Validation from './29. validation/Validation'
import Validationwithuseactionstate from './30. validation with useActionState/Validationwithuseactionstate'
import Usereducer from './31. useReducer hook/Usereducer'
import Lazyloading from './32. lazy loading in react/Lazyloading'
import Useapi from './33. use api in react/Useapi'
import UseOptimistic from './34. useOptimistic Hook/UseOptimistic'

function App() {

	return (
		<>
			<h1 style={{
				textAlign: 'center',
				backgroundColor: '#f6ebff',
				width: '350px',
				margin: '40px auto',
				padding: '10px',
				fontFamily: 'arial',
				borderRadius: '3px'
			}}>
				Learning React JS
			</h1>

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
			<Wrapper><Useformstatus /></Wrapper>
			<Wrapper><Usetransition /></Wrapper>
			<Wrapper><Drivedstate /></Wrapper>
			<Wrapper><Liftingstateup /></Wrapper>
			<Wrapper><Updateobjectinstate /></Wrapper>
			<Wrapper><Updatearrayinstate /></Wrapper>
			<Wrapper><Useactionstate /></Wrapper>
			<Wrapper><Useid /></Wrapper>
			<Wrapper><Contextapi /></Wrapper>
			<Wrapper><Customhooks /></Wrapper>
			<Wrapper><Reactrouter /></Wrapper>
			<Wrapper><Apiroot /></Wrapper>
			<Wrapper><Validation /></Wrapper>
			<Wrapper><Validationwithuseactionstate /></Wrapper>
			<Wrapper><Usereducer /></Wrapper>
			<Wrapper><Lazyloading /></Wrapper>
			<Wrapper><Useapi /></Wrapper>
			<Wrapper><UseOptimistic /></Wrapper>
		</>
	)
}

// exporting the App component
export default App
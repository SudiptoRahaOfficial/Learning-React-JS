import React from 'react'
import Inline from './Inline'
import Conditionalinline from './Conditionalinline'
import External from './External'
import Moduler from './Moduler'
import Styledcomponent from './Styledcomponent'

function Styling() {

	return (
		<div>
			<h2>Part 13 : Styling In React</h2>

			<h4>Inline Styling in React</h4>
			<Inline />

			<h4>Conditional Inline Styling & dynamic style in React</h4>
			<Conditionalinline />

			<h4>External Styling in React</h4>
			<External />

			<h4>Moduler Styling in React</h4>
			<Moduler />

			<h4>Styled Component</h4>
			<Styledcomponent />
		</div>
	)
}

export default Styling
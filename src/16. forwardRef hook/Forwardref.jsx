import React, { useRef } from 'react'
import Input from './Input'

function Forwardref() {
	const inputRef = useRef()
	function updateInput() {
		inputRef.current.value = 'Username'
		inputRef.current.focus()
	}
	return (
		<div>
			<h2>Part 16 : forwardRef Hook in React</h2>
			<Input ref={inputRef} /> <br />
			<br />
			<button onClick={updateInput}>Update Input</button>
		</div>
	)
}

export default Forwardref
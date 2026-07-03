import React, { useRef } from 'react'

function Useref() {
	const userNameInputRef = useRef(null)
    const headingRef = useRef(null)

	function inputHandler() {
		userNameInputRef.current.focus()
		userNameInputRef.current.placeholder = 'Enter username here...'
		userNameInputRef.current.value = 'Username'
		userNameInputRef.current.style.backgroundColor = '#CCCCFF'
		userNameInputRef.current.style.color = 'red'
	}

	function toggleHandler() {
		if (userNameInputRef.current.style.display != 'none') {
			userNameInputRef.current.style.display = 'none'
		} else {
			userNameInputRef.current.style.display = 'inline'
		}
	}

	function headingChangeHandler() {
		headingRef.current.style.color = 'red'
    }

    const userRef = useRef()
    const passwordRef = useRef()
    
    function handleFormSubmit(event) {
		event.preventDefault()
        const user = userRef.current.value
        const password = passwordRef.current.value
        console.log(user, password)
	}

	return (
		<div>
            <h2 ref={headingRef}>Part 14 : useRef hook In React</h2>
            
            <h4>useRef basics</h4>
			<input ref={userNameInputRef} type='text' /> <br /> <br />
			<button onClick={inputHandler}>
				Focus on input field
			</button> <br /> <br />
			<button onClick={toggleHandler}>Toggle</button> <br /> <br />
            <button onClick={headingChangeHandler}>Change Heading</button>
            
            <h4>uncontrolled component with useRef</h4>
            <form action="#" method='post' onSubmit={handleFormSubmit}>
                <input ref={userRef} type="text" placeholder='Enter username' /> <br /><br />
                <input ref={passwordRef} type="password" placeholder='Enter password' /> <br /><br />
                <button>Submit</button>
            </form>
		</div>
	)
}

export default Useref
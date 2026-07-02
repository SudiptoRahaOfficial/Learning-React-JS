// JSX allows to write HTML-like code within JavaScript code.

import React from 'react'

function Jsx() {
    // Using JSX, we can embed JavaScript expressions within curly braces - {}. For example, we can define a variable, functions etc. And use it within the JSX code.
    const name = 'Sudipto Raha'
    const userName = ''
    
	let a = 10
    let b = 20

    const users = ['Alice', 'Bob', 'Charlie']

    const userObj = {
        name: 'Sudipto',
        age: 25,
        email: 'sudipto.raha@example.com'
    }

    const imgPath =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgfL96OohK57rcIqj-mGqc5vvL1VncrwGIOqFF4FwTw&s'
    
	function printNumbers() {
		alert(`Numbers: ${a}, ${b}`)
	}
	function multiply(a, b) {
		alert(a * b)
    }

	return (
		<div>
            <h2>Part 2: JSX in React</h2>
            

			<p>Hello, {name || 'User'}!</p>
            <p>Welcome, {userName || 'User'}!</p>

            {name && <p>Nice to meet you, {name}!</p>}
            {userName && <p>Nice to meet you, {userName}!</p>}

			<p>
				The sum of {a} and {b} is: <strong>{a + b}</strong>
            </p>

            <div>
                <p>Users List:</p>
                <ul>
                    <li>{users[0]}</li>
                    <li>{users[1]}</li>
                    <li>{users[2]}</li>
                </ul>
            </div>

            <div>
                <p>User Details:</p>
                <ul>
                    <li>Name: <strong>{userObj.name}</strong></li>
                    <li>Age: <strong>{userObj.age}</strong></li>
                    <li>Email: <strong>{userObj.email}</strong></li>
                </ul>
            </div>

            <img src={imgPath} alt={userObj.name} width="200" height="200" />
            <br /> <br />

            <input type="text" defaultValue={name} id={name} /> <br /> <br />
            
			<button onClick={printNumbers}>Print Numbers</button>
			<br /> <br />
			<button onClick={() => multiply(a, b)}>Multiply</button>
		</div>
	)
}

export default Jsx
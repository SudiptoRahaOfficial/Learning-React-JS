import React from 'react'
import User from './User'

function Passfunctionasprops() {
	function displayUserName(name) {
		alert(`User Name: ${name}`)
    }
    
    function getUser() {
        alert('Get user function called!')
    }

	return (
		<div>
			<h2>Pass Function As Props</h2>
			<h4>call parent function from child component</h4>
			<User displayUserName={displayUserName} name='Sudipto' getUser={getUser} /> <br />
			<br />
			<User displayUserName={displayUserName} name='Shuvo' getUser={getUser} /> <br />
			<br />
			<User displayUserName={displayUserName} name='Rajdip' getUser={getUser} /> <br />
			<br />
			<User displayUserName={displayUserName} name='Rudra' getUser={getUser} /> <br />
			<br />
		</div>
	)
}

export default Passfunctionasprops
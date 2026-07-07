import React, { useState, Activity } from 'react'

function Activityfeature() {
	const [showhome, setshowhome] = useState(true)

	return (
		<div>
			<h2>Part 35 : Activity Feature in React</h2>

			<button onClick={() => setshowhome(true)}>Home</button>
			<button onClick={() => setshowhome(false)}>User Form</button>

			<Activity mode={showhome === true ? 'visible' : 'hidden'}>
				<Home />
			</Activity>
			<Activity mode={showhome === false ? 'visible' : 'hidden'}>
				<Userform />
			</Activity>
		</div>
	)
}

export default Activityfeature

// home sub component
function Home() {
	return (
		<div>
			<h3>Home Sub Component</h3>
			<h4>Welcome to the Study in Canada Agency</h4>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				Incidunt at voluptatem ea pariatur maiores omnis molestiae minus
				eius sequi. Blanditiis mollitia facere sapiente nihil, aliquam
				vero. Cumque officia iste tenetur?
			</p>
		</div>
	)
}

// user-form sub component
function Userform() {
	return (
		<div>
			<h3>User Form Sub Component</h3>

			<form action='#'>
				<input type='text' placeholder='Enter name' /> <br />
				<br />
				<input type='email' placeholder='Enter email' /> <br />
				<br />
				<input type='password' placeholder='Enter password' /> <br />
				<br />
				<button>Submit</button>
			</form>
		</div>
	)
}
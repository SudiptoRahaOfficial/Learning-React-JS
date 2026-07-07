import React, { lazy, Suspense, useState } from 'react'

// importing by useing lazy loading
const User = lazy(() => import('./User'))

function Lazyloading() {
	const [load, setload] = useState(false)

	return (
		<div>
			<h2>Part 32 : Lazy Loading in React</h2>

			{load && (
				<Suspense fallback={<h3>Loading...</h3>}>
					<User />
				</Suspense>
			)}
			<button onClick={() => setload(true)}>Load Users</button>
		</div>
	)
}

export default Lazyloading
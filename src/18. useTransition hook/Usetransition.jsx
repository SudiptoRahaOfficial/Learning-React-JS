import React, { useTransition } from 'react'

function Usetransition() {
	const [pending, startTransition] = useTransition()

	function handleClick() {
		startTransition(async () => {
			await new Promise((res) => setTimeout(res, 3000))
		})
	}

	return (
		<div>
			<h2>Part 18 : useTransition Hook in React</h2>

			{pending ? (
				<img
					src='/loader.gif'
					alt='loader-image'
					style={{
						width: '200px',
						margin: '0 auto',
						display: 'block',
					}}
				/>
			) : null}
			<br />
			<br />
			<button disabled={pending} onClick={handleClick}>
				{pending ? 'Loading...' : 'Load'}
			</button>
		</div>
	)
}

export default Usetransition
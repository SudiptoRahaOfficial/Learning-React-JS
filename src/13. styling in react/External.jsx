import React, { useState } from 'react'
import './style.css'

function External() {
	const [grid, setgrid] = useState(false)
	const [theme, settheme] = useState('light')

	return (
		<>
			<div
				className={
					grid
						? 'container cardsContainerGrid'
						: 'container cardsContainerNormal'
				}
			>
				<p
					className={
						theme === 'light' ? 'card cardLight' : 'card cardDark'
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light' ? 'card cardLight' : 'card cardDark'
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light' ? 'card cardLight' : 'card cardDark'
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light' ? 'card cardLight' : 'card cardDark'
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light' ? 'card cardLight' : 'card cardDark'
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light' ? 'card cardLight' : 'card cardDark'
					}
				>
					External styling in react js
				</p>
			</div>
			<button onClick={() => settheme('dark')}>Dark Theme</button>
			<button onClick={() => setgrid(!grid)}>Toggle Grid</button>
		</>
	)
}

export default External
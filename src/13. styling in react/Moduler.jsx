import React, { useState } from 'react'
import style from './moduler.module.css'

function Moduler() {
	const [grid, setgrid] = useState(false)
	const [theme, settheme] = useState('light')

	return (
		<>
			<div
				className={
					grid
						? `${style.container} ${style.cardsContainerGrid}`
						: `${style.container} ${style.cardsContainerNormal}`
				}
			>
				<p
					className={
						theme === 'light'
							? `${style.card} ${style.cardLight}`
							: `${style.card} ${style.cardDark}`
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light'
							? `${style.card} ${style.cardLight}`
							: `${style.card} ${style.cardDark}`
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light'
							? `${style.card} ${style.cardLight}`
							: `${style.card} ${style.cardDark}`
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light'
							? `${style.card} ${style.cardLight}`
							: `${style.card} ${style.cardDark}`
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light'
							? `${style.card} ${style.cardLight}`
							: `${style.card} ${style.cardDark}`
					}
				>
					External styling in react js
				</p>
				<p
					className={
						theme === 'light'
							? `${style.card} ${style.cardLight}`
							: `${style.card} ${style.cardDark}`
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

export default Moduler
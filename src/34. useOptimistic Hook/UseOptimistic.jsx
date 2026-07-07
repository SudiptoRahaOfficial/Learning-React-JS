import React, { useState, useOptimistic, useTransition } from 'react'

function UseOptimistic() {
	const [tasks, setTasks] = useState(['Learn useOptimistic'])
	const [optimisticTasks, addOptimisticTask] = useOptimistic(
		tasks,
		(current, newTask) => [...current, newTask],
	)
	const [isPending, startTransition] = useTransition()
	const [input, setInput] = useState('')

	function handleAdd() {
		const newTask = input
		setInput('')

		startTransition(async () => {
			addOptimisticTask(newTask) // show instantly
			await new Promise((r) => setTimeout(r, 1000)) // fake "server" delay
			setTasks((prev) => [...prev, newTask]) // commit for real
		})
	}

	return (
		<div>
			<h2>Part 34 : useOptimistic Hook in React</h2>
			<input
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder='Enter new task'
			/>
			<br /> <br />
			<button onClick={handleAdd} disabled={isPending}>
				Add
			</button>
			<ul>
				{optimisticTasks.map((task, i) => (
					<li key={i}>{task}</li>
				))}
			</ul>
		</div>
	)
}

export default UseOptimistic
import React, { useState } from 'react'

function Updateobjectinstate() {
	const [data, setData] = useState({
		name: 'Sudipto',
		address: {
			city: 'Khulna',
			country: 'Bangladesh',
		},
    })
    
    function updateName(value) {
        data.name = value
        setData({ ...data })
    }
    function updateCity(value) {
        data.address.city = value
        setData({ ...data, address: { ...data.address } })
    }
    function updateCountry(value) {
        data.address.country = value
        setData({ ...data, address: { ...data.address } })
    }

	return (
		<div>
			<h2>Part 21 : Updateing Object in State</h2>

			<input
				onChange={(event) => updateName(event.target.value)}
				type='text'
				placeholder='Update name'
			/>
			<p>
				Name : <strong>{data.name}</strong>
			</p>
			<input
				onChange={(event) => updateCity(event.target.value)}
				type='text'
				placeholder='Update city'
			/>
			<p>
				City : <strong>{data.address.city}</strong>
			</p>
			<input
				onChange={(event) => updateCountry(event.target.value)}
				type='text'
				placeholder='Update country'
			/>
			<p>
				Country : <strong>{data.address.country}</strong>
			</p>
		</div>
	)
}

export default Updateobjectinstate
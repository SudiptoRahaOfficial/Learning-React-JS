import React, { useState } from 'react'

function useToggle(defaultValue) {
	const [value, setvalue] = useState(defaultValue)

	function toggleValue(val) {
		if (typeof val != 'boolean') {
			setvalue(!value)
		} else {
			setvalue(val)
		}
	}
	return [value, toggleValue]
}

export default useToggle
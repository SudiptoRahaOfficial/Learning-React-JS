import React from 'react'
import styled from 'styled-components'

function Styledcomponent() {
	const P = styled.p`
		color: red;
		border: 1px solid red;
		text-align: center;
		width: 300px;
	`
	return (
		<div>
			<P>This is example of Styled Component</P>
		</div>
	)
}

export default Styledcomponent
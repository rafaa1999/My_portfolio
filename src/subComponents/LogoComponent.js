import React from 'react'
import styled from 'styled-components'



const Logo = styled.h1`
display: inline-block;
color: ${props => props.color};
font-family: 'Pacifico',cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index:3;
`


function LogoComponent() {
  return (
    <Logo >
          RBR
    </Logo>
  )
}

export default LogoComponent
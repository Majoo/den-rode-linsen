import React from 'react'
import styled from 'styled-components'

type HeaderProps ={
  title: string
}

const StyledHeader = styled.header`
  height: 264px;
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.primary.light};
  padding: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`


const StyledImage = styled.img`
  width: 48;
  height: 48;
`

const Title = styled.h1`
  margin: 0px 24px;
`

export default function Header({ title }: HeaderProps) {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <StyledImage src='/lentils-48.png' alt='' />
        <Title>{title}</Title>
        <StyledImage src='/lentils-48.png' alt='' />
      </StyledHeaderContainer>
    </StyledHeader>
  )
}

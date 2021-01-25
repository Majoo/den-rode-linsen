import React from 'react'
import styled from 'styled-components'
import { PEOPLE } from '../data/constants.js'

type PersonType = {
  name: string,
  imgSrc: string
}

type PersonProps = {
  person: PersonType
}

const StyledPerson = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`

function Person({ person }: PersonProps) {

  return (
    <StyledPerson>
      <StyledImage
        src={`/${person.imgSrc}`}
        alt=''
      />
      <p>{person.name}</p>
    </StyledPerson>
  )
}

const CenterOnPageStyle = styled.div`
  display: flex;
  justify-content: center;
`

const StyledPeopleWrapper = styled.section`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.primary.light};
  padding: 16px;
  padding-bottom: 48px;
`

const StyledPeopleContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export default function People() {
  return (
    <CenterOnPageStyle>
      <StyledPeopleWrapper>
        <h2 style={{ cursor: 'url("./heart2.png")' }}>People</h2>
        <StyledPeopleContainer>
          {PEOPLE.map(person => (
            <Person person={person} key={person.imgSrc} />
          ))}
        </StyledPeopleContainer>
      </StyledPeopleWrapper>
    </CenterOnPageStyle>
  )
}

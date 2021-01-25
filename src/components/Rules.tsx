import React from 'react'
import styled from 'styled-components'

const CenterOnPageStyle = styled.div`
  background-color: ${props => props.theme.colors.primary.light};
  color: ${props => props.theme.colors.dark};
  display: flex;
  justify-content: center;
`

const StyledRulesWrapper = styled.section`
  padding: 16px;
  padding-bottom: 48px;
`

export default function Rules() {
  return (
    <CenterOnPageStyle>
      <StyledRulesWrapper>
          <h2>Rules</h2>

          <div style={{ maxWidth: 633 }}>
            <h4>Kitchen</h4>
            <ol>
              <li>Clean up after you have used the kitchen. After 3 hours it should be finished</li>
              <li>No big stuff in the dishwasher</li>
              <li>Don't leave dishes in the sink</li>
              <li>When you put one clean thing on the dish rack, remove two and put them in their place</li>
              <li>Things that we only have one of should be cleaned directly so that somebody else can use it</li>
            </ol>

            <h4>Other</h4>
            <ol>
              <li>We keep quiet after 22:00 on weekdays</li>
            </ol>

            <h4>Cleaning week</h4>
            <ol>
              <li>Two room neighbours do the cleaning. For example room 1 & 2, then 3 & 4... If somebody is away and can't clean, it's the next person in line's turn.</li>
              <li>After cleaning, remind the next two people that it's their turn</li>
            </ol>
          </div>
      </StyledRulesWrapper>
    </CenterOnPageStyle>
  )
}

// Editable + senast edited

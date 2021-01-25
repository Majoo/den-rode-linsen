import React from 'react'

export default function Nav() {
  return (
    <nav style={{ padding: '0px 16px' }}>
      <ul style={{ display: 'flex', justifyContent: 'flex-end', listStyleType: 'none'}}>
        <li style={{ color: '#CA721A', marginRight: 16 }}>People</li>
        <li style={{ color: '#F9D4A3'}}>Rules</li>
      </ul>
    </nav>
  )
}

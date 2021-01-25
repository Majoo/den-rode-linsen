import React from 'react'
import { ThemeProvider } from 'styled-components'

import Header from './components/Header'
import People from './components/People'
import Rules from './components/Rules'

import './App.css'
import { theme } from './styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header title='Den røde linsen' />
      <main>
        <People />
        <Rules />
      </main>
    </ThemeProvider>
  )
}

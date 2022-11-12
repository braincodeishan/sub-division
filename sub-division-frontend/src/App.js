import React from 'react'
import MainApp from './MainApp'
import { MiscProvider } from './Contexts/LoginProvider'
import './App.css'
import './Generic.css'

const App = () => {
  return (
    <>
      <MiscProvider>
        <MainApp />
      </MiscProvider>
    </>
  )
}

export default App

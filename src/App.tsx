import React from 'react'
import { GlobalStyle } from './Global/GlobalStyle'
import { BrowserRouter } from 'react-router-dom'
import Rotas from './Rotas'

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Rotas />
      </BrowserRouter>
    </>
  )
}

export default App

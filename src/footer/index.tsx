import React from 'react'
import { DivContainers } from '../components/DivContainers'
import { StyleFooter } from './style'

export const FooterComponent = () => {
  const ano = new Date().getFullYear()
  return (
    <DivContainers>
      <StyleFooter>
        <h5>&copy; {ano} - Wendell Souza</h5>
      </StyleFooter>
    </DivContainers>
  )
}

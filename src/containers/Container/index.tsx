import React from 'react'
import { StyleContainer } from './style'

export const Container = ({ children }: PropsContainer) => {
  return (
    <>
      <StyleContainer>{children}</StyleContainer>
    </>
  )
}

import React from 'react'
import { StyleBody } from './style'
import { Header } from '../../components/Header'
import { Container } from '../Container'
import { Descricao } from '../../components/Descricao'
import { Tecnologias } from '../../components/Tecnologias'
import { GitHub } from '../../components/GitHub'
import { Apis } from '../../components/Apis'
import { Porfolio } from '../../components/Portfolio'

export const Body = () => {
  return (
    <>
      <StyleBody>
        <Container>
          <Header />
          <Descricao />
          <Tecnologias />
          <GitHub />
          <Apis />
          <Porfolio />
        </Container>
      </StyleBody>
    </>
  )
}

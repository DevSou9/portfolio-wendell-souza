import React from 'react'
import { StyleBody } from './style'
import { Header } from '../../components/Header'
import { Container } from '../Container'
import { Descricao } from '../../components/Descricao'
import { Tecnologias } from '../../components/Tecnologias'
import { GitHub } from '../../components/GitHub'
import { Porfolio } from '../../components/Portfolio'
import { FooterComponent } from '../../footer'

export const Body = () => {
  return (
    <>
      <StyleBody>
        <Container>
          <Header />
          <Descricao />
          <Tecnologias />
          <GitHub />
          <Porfolio />
          <FooterComponent />
        </Container>
      </StyleBody>
    </>
  )
}

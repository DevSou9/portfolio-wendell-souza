import React from 'react'
import logo from '../../assets/img/logo.png'
import { StyleHeader } from './styles'

export const Header = () => {
  //CONTINUAR DAQUI COM O HASHLINK PARA AS <li>
  return (
    <>
      <div></div>
      <StyleHeader>
        <img src={logo} alt="" />

        <nav>
          <ul>
            <li>Sobre mim</li>
            <li>Skills</li>
            <li>GitHub</li>
            <li>APIs</li>
            <li>Portfólio</li>
          </ul>
        </nav>
      </StyleHeader>
    </>
  )
}

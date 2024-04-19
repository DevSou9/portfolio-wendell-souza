import React, { useState } from 'react'
import logo from '../../assets/img/logo.png'
import { StyleHeader, LinkHash } from './styles'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div></div>
      <StyleHeader stausIsOpen={isOpen}>
        <img src={logo} alt="" />

        <nav className="navDesktop">
          <ul className="ulNav">
            <LinkHash to="#IdDescricao">
              <li>Descrição</li>
            </LinkHash>

            <LinkHash to="#idSkills">
              <li>Skills</li>
            </LinkHash>

            <LinkHash to="#idGitHub">
              <li>GitHub</li>
            </LinkHash>

            <LinkHash to="#portfolio">
              <li>Portfólio</li>
            </LinkHash>
          </ul>
        </nav>

        <nav className="navMobile">
          <div onClick={() => setIsOpen(!isOpen)}>
            <span className="hamburger" />
            <span className="hamburger" />
            <span className="hamburger" />
          </div>
          {isOpen && (
            <div onClick={() => setIsOpen(!isOpen)} className="divIsOpen">
              <div onClick={(e) => e.stopPropagation()} className="divUlIsOpen">
                <ul className="ulNav">
                  <LinkHash
                    onClick={() => setIsOpen(!isOpen)}
                    to="#IdDescricao"
                  >
                    <li>Descrição</li>
                  </LinkHash>

                  <LinkHash onClick={() => setIsOpen(!isOpen)} to="#idSkills">
                    <li>Skills</li>
                  </LinkHash>

                  <LinkHash onClick={() => setIsOpen(!isOpen)} to="#idGitHub">
                    <li>GitHub</li>
                  </LinkHash>

                  <LinkHash onClick={() => setIsOpen(!isOpen)} to="#portfolio">
                    <li>Portfólio</li>
                  </LinkHash>
                </ul>
              </div>
            </div>
          )}
        </nav>
      </StyleHeader>
    </>
  )
}

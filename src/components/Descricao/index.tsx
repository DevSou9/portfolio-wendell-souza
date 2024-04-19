import React from 'react'
import { MdAlternateEmail, MdOutlineWhatsapp } from 'react-icons/md'
import { CiLinkedin } from 'react-icons/ci'
import { DivContainers } from '../DivContainers'
import { StyleDescricao } from './style'
import hero from '../../assets/img/hero.jpg'
import { colors } from '../../Global/variaveis'
export const Descricao = () => {
  return (
    <DivContainers>
      <StyleDescricao id="IdDescricao">
        <div className="divDescricao">
          <div className="divTitulo">
            <span className="spanTitulo">Desenvolvedor</span>
            <h3 className="h3Nome">Front-End Wendell Souza</h3>
          </div>

          <div className="divP">
            <p>
              Desenvolvedor Front-end, graduado em Análise e Desenvolvimento de
              Sistemas, com mais de 15 anos de experiência nas mais diversas
              áreas de TI. Profissional com perfil movido a desafios e focado em
              resolução de problemas.
            </p>
          </div>
          <div className="divContato">
            <div className="divContatoElementos">
              <MdAlternateEmail style={{ color: colors.blue }} />
              <p>contato@wendellsouza.com</p>
            </div>

            <div className="divContatoElementos">
              <MdOutlineWhatsapp style={{ color: colors.blue }} />
              <p>(21) 99609-3012</p>
            </div>

            <div className="divContatoElementos">
              <CiLinkedin className="icon" style={{ color: colors.blue }} />
              <p>https://www.linkedin.com/in/wendell-souza/</p>
            </div>
          </div>
        </div>
        <div className="divGridHero">
          <div className="hero">
            <img src={hero} alt="" />
          </div>
        </div>
      </StyleDescricao>
    </DivContainers>
  )
}

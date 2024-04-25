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
            <h3 className="h3Nome">Full Stack Wendell Souza</h3>
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
              <a
                href="mailto:contato@wendellsouza.com"
                target="_blank"
                rel="noreferrer"
              >
                {' '}
                <p>contato@wendellsouza.com</p>
              </a>
            </div>

            <div className="divContatoElementos">
              <MdOutlineWhatsapp style={{ color: colors.blue }} />
              <a
                href="https://wa.me/5521996093012"
                target="_blank"
                rel="noreferrer"
              >
                <p>(21) 99609-3012</p>
              </a>
            </div>

            <div className="divContatoElementos">
              <CiLinkedin className="icon" style={{ color: colors.blue }} />
              <a
                href="https://www.linkedin.com/in/wendell-souza/"
                target="_blank"
                rel="noreferrer"
              >
                <p>https://www.linkedin.com/in/wendell-souza/</p>
              </a>
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

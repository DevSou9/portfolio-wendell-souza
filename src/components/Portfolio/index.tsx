import React from 'react'
import { DivCardPortfolio } from './style'
import { DivContainers } from '../DivContainers'
import fp from '../../assets/img/fp.jpeg'

import { colors } from '../../Global/variaveis'
import efood from '../../assets/img/efood.png'
import eplay from '../../assets/img/eplay.jpg'
import disney from '../../assets/img/disney.jpg'
// const urlImg = 'https://via.placeholder.com/150x100'

import { SiExpress, SiJavascript, SiMongodb } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { TbBrandTypescript } from 'react-icons/tb'
import {
  SiReactrouter,
  SiRedux,
  SiEditorconfig,
  SiEslint,
  SiPrettier,
  SiStyledcomponents
} from 'react-icons/si'

import { FaSass, FaGulp } from 'react-icons/fa6'

export const Porfolio = () => {
  return (
    <DivContainers>
      <div id="portfolio" className="divSubTitulo divTitulo">
        <h3>Portfólio</h3>
      </div>

      <DivCardPortfolio>
        <div className="divCardPortfolio">
          <img src={fp} alt="" />

          <div className="divH4CardPortfolio">
            <h4>API Fórmula Plus</h4>
          </div>

          <div className="divPCardPortfolio">
            <p>
              Desenvolvi uma API para a Fórmula Plus, utilizando Node.js,
              Express e MongoDB, conectando-se à estrutura da Loja Integrada.
            </p>

            <p>
              Essa API permite a extração detalhada de dados sobre vendas e
              desempenho, fornecendo relatórios essenciais para impulsionar as
              vendas e oferecer insights estratégicos para o crescimento e
              desempenho comercial.
            </p>
          </div>

          <div className="divSVG">
            <FaNodeJs style={{ color: colors.blue }} />
            <SiExpress style={{ color: colors.blue }} />
            <SiJavascript style={{ color: colors.blue }} />
            <SiMongodb style={{ color: colors.blue }} />
          </div>

          <div className="divButtonSaibaMais">
            <a
              href="https://apidateli.wendellsouza.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button>Saiba Mais</button>
            </a>
          </div>
        </div>

        <div className="divCardPortfolio">
          <img src={efood} alt="Efood" />

          <div className="divH4CardPortfolio">
            <h4>E-commerce Efood para Desktop</h4>
          </div>

          <div className="divPCardPortfolio">
            <p>
              Desenvolvi um site de e-commerce surpreendente e singular,
              alimentado por uma API, com checkout transparente, design
              atrativo, funcionalidades dinâmicas e carrinho de compras
              interativo que alimenta um contador dinâmico, aumentando conforme
              os usuários adicionam itens ao carrinho.
            </p>
            <p>
              O projeto ainda conta com animações atrativa durante o
              carregamento das páginas.
            </p>
          </div>

          {/* <p>
            O Hero, assim como todas imagens e informações, são atualizadas
            automaticamente por meio de uma comunicação AJAX com uma API,
            proporcionando uma experiência dinâmica ao usuário.
          </p> */}

          {/* <p>
            O projeto é totalmente interativo, apresentando várias animações,
            incluindo uma animação atrativa durante o carregamento das páginas.
          </p> */}

          <div className="divSVG">
            <TbBrandTypescript style={{ color: colors.blue }} />
            <FaReact style={{ color: colors.blue }} />
            <SiStyledcomponents style={{ color: colors.blue }} />
            <SiRedux style={{ color: colors.blue }} />
            <SiReactrouter style={{ color: colors.blue }} />
            <SiEditorconfig style={{ color: colors.blue }} />
            <SiEslint style={{ color: colors.blue }} />
            <SiPrettier style={{ color: colors.blue }} />
          </div>

          <div className="divButtonSaibaMais">
            <button>Saiba Mais</button>
          </div>
        </div>

        <div className="divCardPortfolio">
          <img src={eplay} alt="" />

          <div className="divH4CardPortfolio">
            <h4>E-commerce Eplay para Desktop</h4>
          </div>

          <div className="divPCardPortfolio">
            <p>
              Criei um site de e-commerce muito atraente com checkout
              transparente, design cativante e funcionalidades dinâmicas. As
              animações durante o carregamento das páginas que traduzem bem o
              nicho da loja.
            </p>

            <p>
              O carrinho de compras é interativo. O Hero, as imagens e os dados
              são atualizados automaticamente via AJAX, garantindo uma
              experiência dinâmica.
            </p>
          </div>

          {/* <p>
            O projeto é altamente interativo, com animações durante o
            carregamento das páginas que traduzem bem o nicho da loja.
          </p> */}

          <div className="divSVG">
            <TbBrandTypescript style={{ color: colors.blue }} />
            <FaReact style={{ color: colors.blue }} />
            <SiStyledcomponents style={{ color: colors.blue }} />
            <SiRedux style={{ color: colors.blue }} />
            <SiReactrouter style={{ color: colors.blue }} />
            <SiEditorconfig style={{ color: colors.blue }} />
            <SiEslint style={{ color: colors.blue }} />
            <SiPrettier style={{ color: colors.blue }} />
          </div>

          <div className="divButtonSaibaMais">
            <button>Saiba Mais</button>
          </div>
        </div>

        <div className="divCardPortfolio">
          <img src={disney} alt="" />

          <div className="divH4CardPortfolio">
            <h4>Clone Disney + Responsivo</h4>
          </div>

          <div className="divPCardPortfolio">
            <p>
              Criação de um clone do site Disney + totalmente responsivo,
              incluindo funcionalidades como acordions desenvolvidos com
              JavaScript para interatividade dinâmica.
            </p>
            <p>
              Implementação de um recurso em JavaScript que oculta
              automaticamente o header durante o scroll do usuário, garantindo
              uma experiência de navegação mais imersiva e limpa.
            </p>
          </div>

          {/* <p>
            Foco na responsividade, assegurando que o clone do site seja
            adaptável a diferentes dispositivos e tamanhos de tela,
            proporcionando uma experiência consistente e intuitiva para os
            usuários.
          </p> */}

          {/* <p>
            Desenvolvimento do projeto com HTML e SASS para estruturação e
            estilização avançada. Interação dinâmica com JavaScript, incluindo
            acordions, e automação do fluxo de trabalho com Gulp.
          </p> */}
          <div className="divSVG">
            <FaHtml5 style={{ color: colors.blue }} />
            <FaSass style={{ color: colors.blue }} />
            <SiJavascript style={{ color: colors.blue }} />
            <FaGulp style={{ color: colors.blue }} />
          </div>

          <div className="divButtonSaibaMais">
            <button>Saiba Mais</button>
          </div>
        </div>
      </DivCardPortfolio>
    </DivContainers>
  )
}

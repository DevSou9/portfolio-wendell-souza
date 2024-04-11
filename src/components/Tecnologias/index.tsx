import React from 'react'
import { colors } from '../../Global/variaveis'
import { StyleTecno } from './style'
import { DivContainers } from '../DivContainers'

import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaLess } from 'react-icons/fa'
import { TbBrandJavascript, TbBrandTypescript } from 'react-icons/tb'
import { SiReactrouter, SiJquery, SiRedux, SiBabel } from 'react-icons/si'
import { FaVuejs, FaBootstrap, FaSass, FaGulp, FaGrunt } from 'react-icons/fa6'

export const Tecnologias = () => {
  return (
    <DivContainers>
      <StyleTecno>
        <div className="divTitulo">
          <h3>Tecnologias</h3>
        </div>

        <div>
          <FaReact style={{ color: colors.blue }} />
          React
        </div>
        <div>
          <TbBrandJavascript style={{ color: colors.blue }} />
          JavaScript
        </div>
        <div>
          <TbBrandTypescript style={{ color: colors.blue }} />
          TypeScript
        </div>
        <div>
          <FaHtml5 style={{ color: colors.blue }} />
          HTML
        </div>
        <div>
          <FaCss3Alt style={{ color: colors.blue }} />
          CSS
        </div>
        <div>
          <SiRedux style={{ color: colors.blue }} />
          Redux
        </div>
        <div>
          <SiReactrouter style={{ color: colors.blue }} />
          React Router Dom
        </div>
        <div>
          <FaVuejs style={{ color: colors.blue }} />
          Vue.js
        </div>
        <div>
          <FaBootstrap style={{ color: colors.blue }} />
          BootStrap
        </div>
        <div>
          <SiJquery style={{ color: colors.blue }} />
          JQuery
        </div>
        <div>AJAX</div>

        <div>
          <FaNodeJs />
          Node.js
        </div>

        <div>
          <FaSass style={{ color: colors.blue }} />
          SASS
        </div>

        <div>
          <FaLess style={{ color: colors.blue }} />
          LESS
        </div>

        <div>
          <FaGulp style={{ color: colors.blue }} />
          Gulp
        </div>

        <div>
          <FaGrunt style={{ color: colors.blue }} />
          Grunt
        </div>

        <div>
          <SiBabel style={{ color: colors.blue }} />
          Babel
        </div>

        <div></div>
        <div></div>
        <div></div>
      </StyleTecno>
    </DivContainers>
  )
}

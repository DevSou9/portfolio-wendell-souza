import React from 'react'
import { colors } from '../../Global/variaveis'
import { StyleTecno } from './style'
import { DivContainers } from '../DivContainers'

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaLess,
  FaGitAlt
} from 'react-icons/fa'
import {
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandCypress
} from 'react-icons/tb'
import {
  SiReactrouter,
  SiJquery,
  SiRedux,
  SiBabel,
  SiBem,
  SiEditorconfig,
  SiEslint,
  SiPrettier,
  SiJest,
  SiExpress,
  SiMongodb,
  SiStyledcomponents
} from 'react-icons/si'
import { FaVuejs, FaBootstrap, FaSass, FaGulp, FaGrunt } from 'react-icons/fa6'
import { SlSocialDropbox } from 'react-icons/sl'
import { IoLogoGithub } from 'react-icons/io'

export const Tecnologias = () => {
  return (
    <DivContainers>
      <StyleTecno>
        <div id="idSkills" className="divTitulo">
          <h3>Skills</h3>
        </div>

        <div className="divIconesTec">
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
            <SiStyledcomponents style={{ color: colors.blue }} />
            Styled-Components
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
            <FaNodeJs style={{ color: colors.blue }} />
            Node.js
          </div>
          <div>
            <SiExpress style={{ color: colors.blue }} />
            Express
          </div>
          <div>
            <SiMongodb style={{ color: colors.blue }} />
            MongoDB
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

          <div>
            <SlSocialDropbox style={{ color: colors.blue }} />
            Parcel
          </div>
          <div>
            <SiBem style={{ color: colors.blue }} />
            BEM
          </div>
          <div>SMACSS</div>

          <div>
            <FaGitAlt style={{ color: colors.blue }} />
            Git
          </div>

          <div>
            <IoLogoGithub style={{ color: colors.blue }} />
            GitHub
          </div>

          <div>
            <SiEditorconfig style={{ color: colors.blue }} />
            EditorConfig
          </div>

          <div>
            <SiEslint style={{ color: colors.blue }} />
            ESLint
          </div>

          <div>
            <SiPrettier style={{ color: colors.blue }} />
            Prettier
          </div>

          <div>
            <SiJest style={{ color: colors.blue }} />
            Jest
          </div>

          <div>
            <TbBrandCypress style={{ color: colors.blue }} />
            Cypress
          </div>
        </div>
      </StyleTecno>
    </DivContainers>
  )
}

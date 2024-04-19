import React from 'react'
import { DivContainers } from '../DivContainers'
import { DivGitHub } from './style'

export const GitHub = () => {
  return (
    <div id="idGitHub">
      <DivContainers>
        <div className="divTitulo divSubTitulo">
          <h3>GitHub</h3>
        </div>

        <DivGitHub>
          <div className="divGitDescricao">
            Dê uma olhada no meu GitHub e mergulhe nos projetos que refletem
            minha jornada como desenvolvedor. De pequenas ferramentas a
            aplicativos robustos, cada commit representa minha busca incessante
            pela excelência técnica. Explore e descubra como transformo desafios
            em soluções inovadoras.
          </div>
          <div>
            <div className="divImgGitHub">
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=DevSou9&layout=compact&langs_count=7&theme=dracula"
                alt=" -GitHub Wendell"
              />
            </div>
          </div>
        </DivGitHub>
      </DivContainers>
    </div>
  )
}

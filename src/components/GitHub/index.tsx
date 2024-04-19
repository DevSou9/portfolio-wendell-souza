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
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            fugit voluptatem sunt ut, deserunt beatae autem suscipit nihil sequi
            et aspernatur in aperiam natus corrupti commodi illum possimus
            consectetur excepturi!
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

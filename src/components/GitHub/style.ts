import styled from 'styled-components'
import { breakpoints, colors } from '../../Global/variaveis'

export const DivGitHub = styled.div`
  color: ${colors.gray};
  display: grid;
  grid-template-columns: 4fr 8fr;
  justify-content: center;
  align-items: center;
  padding: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    justify-content: center;
    .divGitDescricao {
      order: 1;
      text-align: center;
    }
    font-size: 18px;
  }

  font-size: 14px;

  .divImgGitHub {
    display: flex;
    justify-content: flex-end;

    @media (max-width: ${breakpoints.mobile}) {
      justify-content: center;
      margin-bottom: 48px;
    }
  }
`

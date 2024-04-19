import styled from 'styled-components'
import { colors } from '../../Global/variaveis'

export const DivGitHub = styled.div`
  color: ${colors.gray};
  display: grid;
  grid-template-columns: 4fr 8fr;
  justify-content: center;
  align-items: center;
  padding: 24px;

  font-size: 14px;

  .divImgGitHub {
    display: flex;
    justify-content: flex-end;
  }
`

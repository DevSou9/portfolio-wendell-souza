import styled from 'styled-components'
import { colors } from '../../Global/variaveis'

export const StyleTecno = styled.div`
  color: ${colors.gray};
  padding: 24px;
  .divIconesTec {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    div {
      margin: 12px;
      padding: 8px;
      background-color: ${colors.blackOpacity};
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 8px;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }
`

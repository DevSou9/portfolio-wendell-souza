import styled from 'styled-components'
import { colors } from '../../Global/variaveis'

export const StyleDescricao = styled.div`
  /* min-height: 70vh; */
  height: calc(90vh - 138px);
  display: grid;
  grid-template-columns: 2fr 3fr;
  column-gap: 40px;
  align-items: center;
  justify-content: center;

  padding: 0 24px;

  p {
    font-size: 14px;
    color: ${colors.gray};
  }

  .divP {
    width: 100%;

    p {
      margin-bottom: 16px;
      word-wrap: break-word;
    }
  }

  .divContato {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 24px;
  }

  .divContatoElementos {
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    p {
      margin-left: 8px;
    }
  }

  .divGridHero {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .hero {
    border-radius: 50%;
    background-color: #000;
    width: 310px;
    height: 310px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 172px;
      width: auto;
      max-width: 100%;
      object-fit: cover;
    }
  }
`

import { createGlobalStyle } from 'styled-components'
import { colors } from './variaveis'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    letter-spacing: 0.7px;
    a {
      text-decoration: none;
    }
    li{
      list-style: none;
    }

    p{
      font-size: 16px;
    }

    h3 {

    font-size: 28px;
    color: ${colors.White};
    font-weight: 400;

  }
  }

    .divTitulo {
    margin-bottom: 24px;
    max-width: 364px;

    span {
      color: ${colors.White};
      font-size: 22px;
    }
    h3 {
      margin: 0;
      border-bottom: 2px solid ${colors.blue};
      margin-bottom: 24px;

    }
  }

  .divSubTitulo{
    padding-left: 24px;
  }
`

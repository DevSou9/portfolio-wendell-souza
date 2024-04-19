import styled from 'styled-components'
import { breakpoints, colors } from '../../Global/variaveis'

export const DivCardPortfolio = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  gap: 12px;
  padding: 24px;

  @media (max-width: ${breakpoints.mobile}) {
    display: grid;
    grid-template-columns: 12fr;
  }

  color: ${colors.gray};

  p {
    font-size: 14px;
  }

  .divCardPortfolio {
    border: 1px solid ${colors.blue};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 14px;
    transition: transform 0.1s ease;

    img {
      width: 150px;
      height: 100px;
      object-fit: cover;
      border: none;
    }

    h4 {
      font-weight: 400;
      color: ${colors.White};
      text-align: center;
    }
    .divH4CardPortfolio {
      margin: 22px 0;
      height: 48px;

      @media (max-width: ${breakpoints.mobile}) {
        height: auto;
      }
    }

    .divPCardPortfolio {
      height: 300px;
      margin-bottom: 22px;
      text-align: center;

      & > p {
        margin-bottom: 12px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        height: auto;
      }
    }

    .divSVG {
      margin-bottom: 22px;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 10px;
      height: 56px;

      @media (max-width: ${breakpoints.mobile}) {
        height: auto;
      }
    }

    .divButtonSaibaMais {
      width: 100%;

      display: flex;
      justify-content: center;
    }

    button {
      cursor: pointer;
      padding: 8px 12px;
      border: none;
      background-color: transparent;
      border: 1px solid ${colors.blue};
      color: ${colors.White};
      font-weight: 400px;
      font-size: 16px;
    }

    &:hover {
      transform: scale(1.05);

      p {
        transform: scale(1);
        transition: font-size 0.1s ease;
      }
    }
  }
`

import styled from 'styled-components'
import { colors } from '../../Global/variaveis'

export const StyleHeader = styled.header`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 46px 0;
  padding: 8px 14px;

  img {
    height: 60px;
  }

  nav ul {
    display: flex;
  }

  nav ul li {
    margin-left: 14px;
  }

  color: ${colors.White};

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${colors.blackOpacity};
    height: 100%;
    width: 100%;
    content: '';
    z-index: -1;
  }
`

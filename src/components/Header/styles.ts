import styled from 'styled-components'
import { colors } from '../../Global/variaveis'
import { HashLink } from 'react-router-hash-link'
import { breakpoints } from '../../Global/variaveis'

export const StyleHeader = styled.header<PropsHeader>`
  position: relative;
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 46px 0;
  padding: 8px 24px;

  img {
    height: 60px;
  }

  .ulNav {
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

  .hamburger {
    border: 1px solid ${colors.White};
    width: 48px;
    margin-bottom: 8px;
    display: block;
  }

  .navMobile {
    display: none;
    height: 100%;
  }

  .divIsOpen {
    position: fixed;
    top: 0;
    right: 0;
    background-color: ${colors.blackOpacity};
    height: 100vh;
    width: 100vw;
    z-index: 3;
    display: flex;
    justify-content: center;

    &::after {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      width: 100vw;
      background-color: ${colors.div};
      width: 70vw;
      z-index: 4;
      content: '';
      display: flex;
      justify-content: center;
      background-attachment: fixed;
    }
    .divUlIsOpen {
      z-index: 5;
      position: fixed;
      top: 24px;
      right: 0;
      height: 100vh;
      width: 70vw;
      display: flex;
      justify-content: center;

      li {
        color: ${colors.black};
        margin-bottom: 16px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    margin: 0;
    .navDesktop {
      display: none;
    }
    .ulNav {
      display: block;
    }
    .navMobile {
      display: block;
    }
  }
`

export const LinkHash = styled(HashLink)`
  color: ${colors.White};
`

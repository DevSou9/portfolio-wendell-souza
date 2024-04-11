import styled from 'styled-components'
import { colors } from '../../Global/variaveis'

export const StyleDivContainers = styled.div<PropsDivContainer>`
  position: relative;
  height: auto;
  width: 100%;
  display: ${(props: PropsDivContainer) => props.display};
  justify-content: ${(props: PropsDivContainer) => props.justifyContent};
  align-items: ${(props: PropsDivContainer) => props.alignItems};
  margin: ${(props: PropsDivContainer) =>
    props.margin ? props.margin : '16px 0 16px 0'};
  padding: ${(props: PropsDivContainer) =>
    props.padding ? props.padding : '24px 14px'};

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

  * {
    z-index: 1;
  }
`

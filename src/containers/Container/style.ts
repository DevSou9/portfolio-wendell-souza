import styled from 'styled-components'
import { breakpoints } from '../../Global/variaveis'

export const StyleContainer = styled.div<PropsContainer>`
  max-width: ${breakpoints.desktop};
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`

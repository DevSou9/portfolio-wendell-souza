import React from 'react'
import { StyleDivContainers } from './style'

export const DivContainers = (props: PropsDivContainer) => {
  return (
    <StyleDivContainers
      display={props.display}
      justifyContent={props.justifyContent}
      alignItems={props.alignItems}
      margin={props.margin}
      padding={props.padding}
    >
      {props.children}
    </StyleDivContainers>
  )
}

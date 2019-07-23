import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GateNotIcon = ({
  size,
  ...props
}) => (
  <Svg
    {...props}
    viewBox='0 0 24 24'
    width={size}
    height={size}
    fill='currentcolor'
  >
    <path d='M2,4V20L16.2,13C16.62,14.19 17.74,15 19,15C20.66,15 22,13.66 22,12C22,10.34 20.66,9 19,9C17.74,9 16.62,9.81 16.2,11L2,4M4,7.3L13.7,12L4,16.7V7.3M19,11C19.5,11 20,11.5 20,12C20,12.5 19.5,13 19,13C18.45,13 18,12.55 18,12C18,11.5 18.5,11 19,11Z' />
  </Svg>
)

GateNotIcon.displayName = 'GateNotIcon'

GateNotIcon.defaultProps = {
  size: 24
}

export default GateNotIcon
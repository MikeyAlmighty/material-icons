import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FuseBladeIcon = ({
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
    <path d='M10,21H8L6,19V16H10V21M18,16H14V21H16L18,19V16M3,3V4C3,4.55 3.45,5 4,5V14C4,14.55 4.45,15 5,15H19C19.55,15 20,14.55 20,14V5H20C20.55,5 21,4.55 21,4V3H3M11.83,13V9.73H10L12.61,4.66V7.93H14.36L11.83,13Z' />
  </Svg>
)

FuseBladeIcon.displayName = 'FuseBladeIcon'

FuseBladeIcon.defaultProps = {
  size: 24
}

export default FuseBladeIcon
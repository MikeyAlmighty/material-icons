import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RayStartArrowIcon = ({
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
    <path d='M23,12L19,16V13H6.83C6.42,14.17 5.31,15 4,15C2.34,15 1,13.66 1,12C1,10.34 2.34,9 4,9C5.31,9 6.42,9.83 6.83,11H19V8L23,12Z' />
  </Svg>
)

RayStartArrowIcon.displayName = 'RayStartArrowIcon'

RayStartArrowIcon.defaultProps = {
  size: 24
}

export default RayStartArrowIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MinecraftIcon = ({
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
    <path d='M4,2H20C21.1,2 22,2.9 22,4V20C22,21.1 21.1,22 20,22H4C2.9,22 2,21.1 2,20V4C2,2.9 2.9,2 4,2M6,6V10H10V12H8V18H10V16H14V18H16V12H14V10H18V6H14V10H10V6H6Z' />
  </Svg>
)

MinecraftIcon.displayName = 'MinecraftIcon'

MinecraftIcon.defaultProps = {
  size: 24
}

export default MinecraftIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GamepadRoundRightIcon = ({
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
    <path d='M4,8H8V4C8,2.9 8.9,2 10,2H14C15.1,2 16,2.9 16,4V8H20C21.1,8 22,8.9 22,10V14C22,15.1 21.1,16 20,16H16V20C16,21.1 15.1,22 14,22H10C8.9,22 8,21.1 8,20V16H4C2.9,16 2,15.1 2,14V10C2,8.9 2.9,8 4,8M16,10V14H20V10H16Z' />
  </Svg>
)

GamepadRoundRightIcon.displayName = 'GamepadRoundRightIcon'

GamepadRoundRightIcon.defaultProps = {
  size: 24
}

export default GamepadRoundRightIcon
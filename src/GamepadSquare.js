import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GamepadSquareIcon = ({
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
    <path d='M21,6H3C1.9,6 1,6.9 1,8V16C1,17.1 1.9,18 3,18H21C22.1,18 23,17.1 23,16V8C23,6.9 22.1,6 21,6M11,13H8V16H6V13H3V11H6V8H8V11H11M15.5,15C14.67,15 14,14.33 14,13.5C14,12.67 14.67,12 15.5,12C16.33,12 17,12.67 17,13.5C17,14.33 16.33,15 15.5,15M19.5,12C18.67,12 18,11.33 18,10.5C18,9.67 18.67,9 19.5,9C20.33,9 21,9.67 21,10.5C21,11.33 20.33,12 19.5,12Z' />
  </Svg>
)

GamepadSquareIcon.displayName = 'GamepadSquareIcon'

GamepadSquareIcon.defaultProps = {
  size: 24
}

export default GamepadSquareIcon
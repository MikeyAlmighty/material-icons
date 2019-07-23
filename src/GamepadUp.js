import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const GamepadUpIcon = ({
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
    <path d='M9,2V7.5L12,10.5L15,7.5V2H9M11,4H13V6H11V4M2,9V15H7.5L10.5,12L7.5,9H2M16.5,9L13.5,12L16.5,15H22V9H16.5M12,13.5L9,16.5V22H15V16.5L12,13.5Z' />
  </Svg>
)

GamepadUpIcon.displayName = 'GamepadUpIcon'

GamepadUpIcon.defaultProps = {
  size: 24
}

export default GamepadUpIcon
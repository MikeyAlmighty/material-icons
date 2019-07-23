import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WindowMaximizeIcon = ({
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
    <path d='M4,4H20V20H4V4M6,8V18H18V8H6Z' />
  </Svg>
)

WindowMaximizeIcon.displayName = 'WindowMaximizeIcon'

WindowMaximizeIcon.defaultProps = {
  size: 24
}

export default WindowMaximizeIcon
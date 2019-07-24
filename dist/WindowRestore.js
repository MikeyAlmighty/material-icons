import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const WindowRestoreIcon = ({
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
    <path d='M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z' />
  </Svg>
)

WindowRestoreIcon.displayName = 'WindowRestoreIcon'

WindowRestoreIcon.defaultProps = {
  size: 24
}

export default WindowRestoreIcon
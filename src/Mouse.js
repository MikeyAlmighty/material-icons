import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MouseIcon = ({
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
    <path d='M11,1.07C7.05,1.56 4,4.92 4,9H11M4,15C4,19.42 7.58,23 12,23C16.42,23 20,19.42 20,15V11H4M13,1.07V9H20C20,4.92 16.94,1.56 13,1.07Z' />
  </Svg>
)

MouseIcon.displayName = 'MouseIcon'

MouseIcon.defaultProps = {
  size: 24
}

export default MouseIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const PauseIcon = ({
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
    <path d='M14,19H18V5H14M6,19H10V5H6V19Z' />
  </Svg>
)

PauseIcon.displayName = 'PauseIcon'

PauseIcon.defaultProps = {
  size: 24
}

export default PauseIcon
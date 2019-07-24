import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const FastForwardIcon = ({
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
    <path d='M13,6V18L21.5,12M4,18L12.5,12L4,6V18Z' />
  </Svg>
)

FastForwardIcon.displayName = 'FastForwardIcon'

FastForwardIcon.defaultProps = {
  size: 24
}

export default FastForwardIcon
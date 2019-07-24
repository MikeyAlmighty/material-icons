import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const Numeric7Icon = ({
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
    <path d='M11,17L15,9V7H9V9H13L9,17' />
  </Svg>
)

Numeric7Icon.displayName = 'Numeric7Icon'

Numeric7Icon.defaultProps = {
  size: 24
}

export default Numeric7Icon
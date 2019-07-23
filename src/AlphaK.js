import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaKIcon = ({
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
    <path d='M9,7V17H11V13.67L13,17H15L12,12L15,7H13L11,10.33V7H9Z' />
  </Svg>
)

AlphaKIcon.displayName = 'AlphaKIcon'

AlphaKIcon.defaultProps = {
  size: 24
}

export default AlphaKIcon
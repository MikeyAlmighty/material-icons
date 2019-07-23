import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaYIcon = ({
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
    <path d='M9,7L11,13V17H13V13L15,7H13L12,10L11,7H9Z' />
  </Svg>
)

AlphaYIcon.displayName = 'AlphaYIcon'

AlphaYIcon.defaultProps = {
  size: 24
}

export default AlphaYIcon
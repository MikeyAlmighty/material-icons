import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaVIcon = ({
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
    <path d='M9,7L11,17H13L15,7H13L12,12L11,7H9Z' />
  </Svg>
)

AlphaVIcon.displayName = 'AlphaVIcon'

AlphaVIcon.defaultProps = {
  size: 24
}

export default AlphaVIcon
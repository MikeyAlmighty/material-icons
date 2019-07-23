import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaZIcon = ({
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
    <path d='M9,7V9H13L9,15V17H15V15H11L15,9V7H9Z' />
  </Svg>
)

AlphaZIcon.displayName = 'AlphaZIcon'

AlphaZIcon.defaultProps = {
  size: 24
}

export default AlphaZIcon
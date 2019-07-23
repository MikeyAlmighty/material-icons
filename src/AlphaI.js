import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaIIcon = ({
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
    <path d='M14,7V9H13V15H14V17H10V15H11V9H10V7H14Z' />
  </Svg>
)

AlphaIIcon.displayName = 'AlphaIIcon'

AlphaIIcon.defaultProps = {
  size: 24
}

export default AlphaIIcon
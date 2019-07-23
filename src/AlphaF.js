import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlphaFIcon = ({
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
    <path d='M9,7V17H11V13H14V11H11V9H15V7H9Z' />
  </Svg>
)

AlphaFIcon.displayName = 'AlphaFIcon'

AlphaFIcon.defaultProps = {
  size: 24
}

export default AlphaFIcon
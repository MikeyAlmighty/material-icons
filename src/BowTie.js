import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BowTieIcon = ({
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
    <path d='M15,14L21,17V7L15,10V14M9,14L3,17V7L9,10V14M10,10H14V14H10V10Z' />
  </Svg>
)

BowTieIcon.displayName = 'BowTieIcon'

BowTieIcon.defaultProps = {
  size: 24
}

export default BowTieIcon
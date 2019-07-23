import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const DiamondIcon = ({
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
    <path d='M6,2L2,8L12,22L22,8L18,2H6Z' />
  </Svg>
)

DiamondIcon.displayName = 'DiamondIcon'

DiamondIcon.defaultProps = {
  size: 24
}

export default DiamondIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CardsDiamondIcon = ({
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
    <path d='M19,12L12,22L5,12L12,2' />
  </Svg>
)

CardsDiamondIcon.displayName = 'CardsDiamondIcon'

CardsDiamondIcon.defaultProps = {
  size: 24
}

export default CardsDiamondIcon
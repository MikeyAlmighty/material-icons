import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SquareSmallIcon = ({
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
    <path d='M10,14V10H14V14H10Z' />
  </Svg>
)

SquareSmallIcon.displayName = 'SquareSmallIcon'

SquareSmallIcon.defaultProps = {
  size: 24
}

export default SquareSmallIcon
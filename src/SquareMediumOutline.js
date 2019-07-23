import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SquareMediumOutlineIcon = ({
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
    <path d='M14,10V14H10V10H14M16,8H8V16H16V8Z' />
  </Svg>
)

SquareMediumOutlineIcon.displayName = 'SquareMediumOutlineIcon'

SquareMediumOutlineIcon.defaultProps = {
  size: 24
}

export default SquareMediumOutlineIcon
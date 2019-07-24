import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SquareOutlineIcon = ({
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
    <path d='M3,3H21V21H3V3M5,5V19H19V5H5Z' />
  </Svg>
)

SquareOutlineIcon.displayName = 'SquareOutlineIcon'

SquareOutlineIcon.defaultProps = {
  size: 24
}

export default SquareOutlineIcon
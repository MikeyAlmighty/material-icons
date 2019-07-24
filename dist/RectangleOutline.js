import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RectangleOutlineIcon = ({
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
    <path d='M4,6V19H20V6H4M18,17H6V8H18V17Z' />
  </Svg>
)

RectangleOutlineIcon.displayName = 'RectangleOutlineIcon'

RectangleOutlineIcon.defaultProps = {
  size: 24
}

export default RectangleOutlineIcon
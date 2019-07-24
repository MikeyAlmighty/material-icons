import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowUpDownBoldIcon = ({
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
    <path d='M10,8H6L12,2L18,8H14V16H18L12,22L6,16H10V8Z' />
  </Svg>
)

ArrowUpDownBoldIcon.displayName = 'ArrowUpDownBoldIcon'

ArrowUpDownBoldIcon.defaultProps = {
  size: 24
}

export default ArrowUpDownBoldIcon
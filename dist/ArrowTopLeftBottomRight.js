import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowTopLeftBottomRightIcon = ({
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
    <path d='M13,21H21V13H19V17.59L6.41,5H11V3H3V11H5V6.41L17.59,19H13V21Z' />
  </Svg>
)

ArrowTopLeftBottomRightIcon.displayName = 'ArrowTopLeftBottomRightIcon'

ArrowTopLeftBottomRightIcon.defaultProps = {
  size: 24
}

export default ArrowTopLeftBottomRightIcon
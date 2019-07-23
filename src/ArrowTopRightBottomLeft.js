import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowTopRightBottomLeftIcon = ({
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
    <path d='M11,21H3V13H5V17.59L17.59,5H13V3H21V11H19V6.41L6.41,19H11V21Z' />
  </Svg>
)

ArrowTopRightBottomLeftIcon.displayName = 'ArrowTopRightBottomLeftIcon'

ArrowTopRightBottomLeftIcon.defaultProps = {
  size: 24
}

export default ArrowTopRightBottomLeftIcon
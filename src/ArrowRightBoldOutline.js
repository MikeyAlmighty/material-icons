import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowRightBoldOutlineIcon = ({
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
    <path d='M11,16H3V8H11V2L21,12L11,22V16M13,7V10H5V14H13V17L18,12L13,7Z' />
  </Svg>
)

ArrowRightBoldOutlineIcon.displayName = 'ArrowRightBoldOutlineIcon'

ArrowRightBoldOutlineIcon.defaultProps = {
  size: 24
}

export default ArrowRightBoldOutlineIcon
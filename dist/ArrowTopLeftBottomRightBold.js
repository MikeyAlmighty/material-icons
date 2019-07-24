import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowTopLeftBottomRightBoldIcon = ({
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
    <path d='M5.83,8.66L3,11.5V3H11.5L8.66,5.83L18.17,15.34L21,12.5V21H12.5L15.34,18.17L5.83,8.66Z' />
  </Svg>
)

ArrowTopLeftBottomRightBoldIcon.displayName = 'ArrowTopLeftBottomRightBoldIcon'

ArrowTopLeftBottomRightBoldIcon.defaultProps = {
  size: 24
}

export default ArrowTopLeftBottomRightBoldIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowRightBoldIcon = ({
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
    <path d='M4,15V9H12V4.16L19.84,12L12,19.84V15H4Z' />
  </Svg>
)

ArrowRightBoldIcon.displayName = 'ArrowRightBoldIcon'

ArrowRightBoldIcon.defaultProps = {
  size: 24
}

export default ArrowRightBoldIcon
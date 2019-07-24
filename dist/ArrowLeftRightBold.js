import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ArrowLeftRightBoldIcon = ({
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
    <path d='M8,14V18L2,12L8,6V10H16V6L22,12L16,18V14H8Z' />
  </Svg>
)

ArrowLeftRightBoldIcon.displayName = 'ArrowLeftRightBoldIcon'

ArrowLeftRightBoldIcon.defaultProps = {
  size: 24
}

export default ArrowLeftRightBoldIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SigmaIcon = ({
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
    <path d='M18,6H8.83L14.83,12L8.83,18H18V20H6V18L12,12L6,6V4H18V6Z' />
  </Svg>
)

SigmaIcon.displayName = 'SigmaIcon'

SigmaIcon.defaultProps = {
  size: 24
}

export default SigmaIcon
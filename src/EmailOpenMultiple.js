import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailOpenMultipleIcon = ({
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
    <path d='M6,8L14,13L22,8V8L14,3L6,8V8M24,8V18C24,19.1 23.1,20 22,20H6C4.9,20 4,19.1 4,18V8C4,7.27 4.39,6.64 4.97,6.29L14,0.64L23.03,6.29C23.61,6.64 24,7.27 24,8M2,8V22H20V24H2C0.9,24 0,23.1 0,22V8H2Z' />
  </Svg>
)

EmailOpenMultipleIcon.displayName = 'EmailOpenMultipleIcon'

EmailOpenMultipleIcon.defaultProps = {
  size: 24
}

export default EmailOpenMultipleIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailMultipleIcon = ({
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
    <path d='M22,6V4L14,9L6,4V6L14,11L22,6M22,2C23.1,2 24,2.9 24,4V16C24,17.1 23.1,18 22,18H6C4.89,18 4,17.1 4,16V4C4,2.89 4.89,2 6,2H22M2,6V20H20V22H2C0.9,22 0,21.1 0,20V6H2Z' />
  </Svg>
)

EmailMultipleIcon.displayName = 'EmailMultipleIcon'

EmailMultipleIcon.defaultProps = {
  size: 24
}

export default EmailMultipleIcon
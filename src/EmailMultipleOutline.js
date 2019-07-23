import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailMultipleOutlineIcon = ({
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
    <path d='M2,6V20H20V22H2C0.9,22 0,21.1 0,20V6H2M6,2H22C23.1,2 24,2.9 24,4V16C24,17.1 23.1,18 22,18H6C4.9,18 4,17.1 4,16V4C4,2.9 4.9,2 6,2M14,9L22,4H6L14,9M6,16H22V6.37L14,11.36L6,6.37V16Z' />
  </Svg>
)

EmailMultipleOutlineIcon.displayName = 'EmailMultipleOutlineIcon'

EmailMultipleOutlineIcon.defaultProps = {
  size: 24
}

export default EmailMultipleOutlineIcon
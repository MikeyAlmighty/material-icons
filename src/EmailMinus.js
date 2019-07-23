import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailMinusIcon = ({
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
    <path d='M3,4C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H14.09C14.03,19.67 14,19.34 14,19C14,15.69 16.69,13 20,13C20.34,13 20.67,13.03 21,13.09V6C21,4.89 20.1,4 19,4H3M3,6L11,11L19,6V8L11,13L3,8V6M16,18V20H24V18H16Z' />
  </Svg>
)

EmailMinusIcon.displayName = 'EmailMinusIcon'

EmailMinusIcon.defaultProps = {
  size: 24
}

export default EmailMinusIcon
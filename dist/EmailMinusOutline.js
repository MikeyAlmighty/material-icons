import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailMinusOutlineIcon = ({
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
    <path d='M3,4C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H14V18H3V8.37L11,13.36L19,8.37V16H21V6C21,4.9 20.1,4 19,4H3M3,6H19L11,11L3,6M16,18V20H24V18H16Z' />
  </Svg>
)

EmailMinusOutlineIcon.displayName = 'EmailMinusOutlineIcon'

EmailMinusOutlineIcon.defaultProps = {
  size: 24
}

export default EmailMinusOutlineIcon
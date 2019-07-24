import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const EmailCheckOutlineIcon = ({
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
    <path d='M23.5,17L18.5,22L15,18.5L16.5,17L18.5,19L22,15.5L23.5,17M1,6V18C1,19.1 1.9,20 3,20H13V18H3V8.37L11,13.36L19,8.37V13H21V6C21,4.9 20.1,4 19,4H3C1.89,4 1,4.89 1,6M3,6H19L11,11L3,6Z' />
  </Svg>
)

EmailCheckOutlineIcon.displayName = 'EmailCheckOutlineIcon'

EmailCheckOutlineIcon.defaultProps = {
  size: 24
}

export default EmailCheckOutlineIcon
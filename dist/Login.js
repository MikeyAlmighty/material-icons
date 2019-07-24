import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const LoginIcon = ({
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
    <path d='M10,17V14H3V10H10V7L15,12L10,17M10,2H19C20.1,2 21,2.9 21,4V20C21,21.1 20.1,22 19,22H10C8.9,22 8,21.1 8,20V18H10V20H19V4H10V6H8V4C8,2.9 8.9,2 10,2Z' />
  </Svg>
)

LoginIcon.displayName = 'LoginIcon'

LoginIcon.defaultProps = {
  size: 24
}

export default LoginIcon
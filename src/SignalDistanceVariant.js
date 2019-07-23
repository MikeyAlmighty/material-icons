import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SignalDistanceVariantIcon = ({
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
    <path d='M4,6V4C10.63,4 16,9.37 16,16H14C14,10.48 9.52,6 4,6M4,10V8C8.42,8 12,11.58 12,16H10C10,12.69 7.31,10 4,10M4,12C6.21,12 8,13.79 8,16H4V12M3,18H19V16L22,19L19,22V20H3V18Z' />
  </Svg>
)

SignalDistanceVariantIcon.displayName = 'SignalDistanceVariantIcon'

SignalDistanceVariantIcon.defaultProps = {
  size: 24
}

export default SignalDistanceVariantIcon
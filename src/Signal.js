import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SignalIcon = ({
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
    <path d='M3,21H6V18H3M8,21H11V14H8M13,21H16V9H13M18,21H21V3H18V21Z' />
  </Svg>
)

SignalIcon.displayName = 'SignalIcon'

SignalIcon.defaultProps = {
  size: 24
}

export default SignalIcon
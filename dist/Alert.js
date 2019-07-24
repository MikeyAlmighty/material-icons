import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const AlertIcon = ({
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
    <path d='M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z' />
  </Svg>
)

AlertIcon.displayName = 'AlertIcon'

AlertIcon.defaultProps = {
  size: 24
}

export default AlertIcon
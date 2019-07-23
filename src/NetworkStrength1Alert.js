import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NetworkStrength1AlertIcon = ({
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
    <path d='M21,1L1,21H17V19H11V13.83L19,5.83V7H21M19,9V17H21V9M19,19V21H21V19' />
  </Svg>
)

NetworkStrength1AlertIcon.displayName = 'NetworkStrength1AlertIcon'

NetworkStrength1AlertIcon.defaultProps = {
  size: 24
}

export default NetworkStrength1AlertIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NetworkStrength4AlertIcon = ({
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
    <path d='M19,17H21V9H19M19,21H21V19H19M1,21H17V7H21V1' />
  </Svg>
)

NetworkStrength4AlertIcon.displayName = 'NetworkStrength4AlertIcon'

NetworkStrength4AlertIcon.defaultProps = {
  size: 24
}

export default NetworkStrength4AlertIcon
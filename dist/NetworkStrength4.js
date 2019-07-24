import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NetworkStrength4Icon = ({
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
    <path d='M1,21H21V1' />
  </Svg>
)

NetworkStrength4Icon.displayName = 'NetworkStrength4Icon'

NetworkStrength4Icon.defaultProps = {
  size: 24
}

export default NetworkStrength4Icon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const NetworkStrength3Icon = ({
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
    <path d='M1,21H21V1M19,5.83V19H16V8.83' />
  </Svg>
)

NetworkStrength3Icon.displayName = 'NetworkStrength3Icon'

NetworkStrength3Icon.defaultProps = {
  size: 24
}

export default NetworkStrength3Icon
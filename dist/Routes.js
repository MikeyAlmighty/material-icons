import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const RoutesIcon = ({
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
    <path d='M11,10H5L3,8L5,6H11V3L12,2L13,3V4H19L21,6L19,8H13V10H19L21,12L19,14H13V20C14.1,20 15,20.9 15,22H9C9,20.9 9.9,20 11,20V10Z' />
  </Svg>
)

RoutesIcon.displayName = 'RoutesIcon'

RoutesIcon.defaultProps = {
  size: 24
}

export default RoutesIcon
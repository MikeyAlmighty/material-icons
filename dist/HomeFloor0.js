import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeFloor0Icon = ({
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
    <path d='M11,10H13V16H11V10M22,12H19V20H5V12H2L12,3L22,12M15,10C15,8.9 14.1,8 13,8H11C9.9,8 9,8.9 9,10V16C9,17.1 9.9,18 11,18H13C14.1,18 15,17.1 15,16V10Z' />
  </Svg>
)

HomeFloor0Icon.displayName = 'HomeFloor0Icon'

HomeFloor0Icon.defaultProps = {
  size: 24
}

export default HomeFloor0Icon
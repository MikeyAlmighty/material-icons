import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeFloor3Icon = ({
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
    <path d='M12,3L22,12H19V20H5V12H2L12,3M15,11.5V10C15,8.89 14.1,8 13,8H9V10H13V12H11V14H13V16H9V18H13C14.1,18 15,17.1 15,16V14.5C15,13.67 14.33,13 13.5,13C14.33,13 15,12.33 15,11.5Z' />
  </Svg>
)

HomeFloor3Icon.displayName = 'HomeFloor3Icon'

HomeFloor3Icon.defaultProps = {
  size: 24
}

export default HomeFloor3Icon
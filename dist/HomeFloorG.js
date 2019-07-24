import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeFloorGIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M11,8H15V10H11V16H13V12H15V16C15,17.11 14.1,18 13,18H11C9.9,18 9,17.1 9,16V10C9,8.89 9.9,8 11,8Z' />
  </Svg>
)

HomeFloorGIcon.displayName = 'HomeFloorGIcon'

HomeFloorGIcon.defaultProps = {
  size: 24
}

export default HomeFloorGIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeFloorBIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M9,8H13C14.1,8 15,8.9 15,10V11.5C15,12.33 14.33,13 13.5,13C14.33,13 15,13.67 15,14.5V16C15,17.1 14.1,18 13,18H9V8M11,10V12H13V10H11M11,14V16H13V14H11Z' />
  </Svg>
)

HomeFloorBIcon.displayName = 'HomeFloorBIcon'

HomeFloorBIcon.defaultProps = {
  size: 24
}

export default HomeFloorBIcon
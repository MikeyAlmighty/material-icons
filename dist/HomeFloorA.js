import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HomeFloorAIcon = ({
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
    <path d='M12,3L2,12H5V20H19V12H22L12,3M11,8H13C14.1,8 15,8.9 15,10V18H13V15H11V18H9V10C9,8.89 9.9,8 11,8M11,10V13H13V10H11Z' />
  </Svg>
)

HomeFloorAIcon.displayName = 'HomeFloorAIcon'

HomeFloorAIcon.defaultProps = {
  size: 24
}

export default HomeFloorAIcon
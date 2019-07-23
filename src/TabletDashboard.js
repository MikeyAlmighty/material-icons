import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const TabletDashboardIcon = ({
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
    <path d='M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18C1,19.1 1.9,20 3,20H21C22.1,20 23,19.1 23,18V6C23,4.89 22.1,4 21,4M7,8H13V13H7V8M14,8H17V10H14V8M17,11V16H14V11H17M7,14H13V16H7V14Z' />
  </Svg>
)

TabletDashboardIcon.displayName = 'TabletDashboardIcon'

TabletDashboardIcon.defaultProps = {
  size: 24
}

export default TabletDashboardIcon
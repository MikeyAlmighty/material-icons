import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewDashboardIcon = ({
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
    <path d='M13,3V9H21V3M13,21H21V11H13M3,21H11V15H3M3,13H11V3H3V13Z' />
  </Svg>
)

ViewDashboardIcon.displayName = 'ViewDashboardIcon'

ViewDashboardIcon.defaultProps = {
  size: 24
}

export default ViewDashboardIcon
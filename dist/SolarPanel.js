import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SolarPanelIcon = ({
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
    <path d='M4,2H20C21.1,2 22,2.9 22,4V14C22,15.1 21.1,16 20,16H15V20H18V22H13V16H11V22H6V20H9V16H4C2.9,16 2,15.1 2,14V4C2,2.9 2.9,2 4,2M4,4V8H11V4H4M4,14H11V10H4V14M20,14V10H13V14H20M20,4H13V8H20V4Z' />
  </Svg>
)

SolarPanelIcon.displayName = 'SolarPanelIcon'

SolarPanelIcon.defaultProps = {
  size: 24
}

export default SolarPanelIcon
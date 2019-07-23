import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BatteryCharging70Icon = ({
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
    <path d='M12,10H4V6H12M12.67,4H11V2H5V4H3.33C2.6,4 2,4.6 2,5.33V20.67C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.67V5.33C14,4.6 13.4,4 12.67,4M23,11H20V4L15,14H18V22L23,11Z' />
  </Svg>
)

BatteryCharging70Icon.displayName = 'BatteryCharging70Icon'

BatteryCharging70Icon.defaultProps = {
  size: 24
}

export default BatteryCharging70Icon
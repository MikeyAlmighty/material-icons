import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BatteryCharging100Icon = ({
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
    <path d='M23,11H20V4L15,14H18V22M12.67,4H11V2H5V4H3.33C2.6,4 2,4.6 2,5.33V20.67C2,21.4 2.6,22 3.33,22H12.67C13.4,22 14,21.4 14,20.67V5.33C14,4.6 13.4,4 12.67,4Z' />
  </Svg>
)

BatteryCharging100Icon.displayName = 'BatteryCharging100Icon'

BatteryCharging100Icon.defaultProps = {
  size: 24
}

export default BatteryCharging100Icon
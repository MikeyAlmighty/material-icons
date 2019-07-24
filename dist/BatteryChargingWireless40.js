import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BatteryChargingWireless40Icon = ({
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
    <path d='M20.07,4.93L18.66,6.34C21.79,9.46 21.79,14.53 18.66,17.66L20.07,19.07C23.97,15.17 23.97,8.84 20.07,4.93M17.24,7.76L15.83,9.17C17.39,10.73 17.39,13.26 15.83,14.83L17.24,16.24C19.58,13.9 19.58,10.1 17.24,7.76M13,4H11V2H5V4H3C2.45,4 2,4.45 2,5V21C2,21.55 2.45,22 3,22H13C13.55,22 14,21.55 14,21V5C14,4.45 13.55,4 13,4M12,14.5H4V6H12V14.5Z' />
  </Svg>
)

BatteryChargingWireless40Icon.displayName = 'BatteryChargingWireless40Icon'

BatteryChargingWireless40Icon.defaultProps = {
  size: 24
}

export default BatteryChargingWireless40Icon
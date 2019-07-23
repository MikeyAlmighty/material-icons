import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const BatteryNegativeIcon = ({
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
    <path d='M11.67,4C12.4,4 13,4.6 13,5.33V20.67C13,21.4 12.4,22 11.67,22H2.33C1.6,22 1,21.4 1,20.67V5.33C1,4.6 1.6,4 2.33,4H4V2H10V4H11.67M15,12H23V14H15V12M3,13H11V6H3V13Z' />
  </Svg>
)

BatteryNegativeIcon.displayName = 'BatteryNegativeIcon'

BatteryNegativeIcon.defaultProps = {
  size: 24
}

export default BatteryNegativeIcon
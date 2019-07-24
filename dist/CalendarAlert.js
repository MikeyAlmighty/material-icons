import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarAlertIcon = ({
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
    <path d='M6,1V3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3H18V1H16V3H8V1H6M5,7H19V19H5V7M11,8V13H13V8H11M11,15V17H13V15H11Z' />
  </Svg>
)

CalendarAlertIcon.displayName = 'CalendarAlertIcon'

CalendarAlertIcon.defaultProps = {
  size: 24
}

export default CalendarAlertIcon
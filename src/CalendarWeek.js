import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarWeekIcon = ({
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
    <path d='M6,1H8V3H16V1H18V3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H6V1M5,7V19H19V7H5M7,9H17V11H7V9Z' />
  </Svg>
)

CalendarWeekIcon.displayName = 'CalendarWeekIcon'

CalendarWeekIcon.defaultProps = {
  size: 24
}

export default CalendarWeekIcon
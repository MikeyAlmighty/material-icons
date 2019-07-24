import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarWeekendOutlineIcon = ({
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
    <path d='M19,4C20.1,4 21,4.9 21,6V20C21,21.1 20.1,22 19,22H5C3.89,22 3,21.1 3,20V6C3,4.9 3.9,4 5,4H6V2H8V4H16V2H18V4H19M19,20V10H5V20H19M19,8V6H5V8H19M7,12H9V18H7V12M15,12H17V18H15V12Z' />
  </Svg>
)

CalendarWeekendOutlineIcon.displayName = 'CalendarWeekendOutlineIcon'

CalendarWeekendOutlineIcon.defaultProps = {
  size: 24
}

export default CalendarWeekendOutlineIcon
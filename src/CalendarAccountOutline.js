import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarAccountOutlineIcon = ({
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
    <path d='M19,4H18V2H16V4H8V2H6V4H5C3.9,4 3,4.9 3,6V20C3,21.1 3.9,22 5,22H19C20.1,22 21,21.1 21,20V6C21,4.9 20.1,4 19,4M19,20H5V10H19V20M19,8H5V6H19M12,11C14,11 15,13.42 13.59,14.84C12.17,16.26 9.75,15.25 9.75,13.25C9.75,12 10.75,11 12,11M16.5,18.88V19H7.5V18.88C7.5,17.63 9.5,16.63 12,16.63C14.5,16.63 16.5,17.63 16.5,18.88Z' />
  </Svg>
)

CalendarAccountOutlineIcon.displayName = 'CalendarAccountOutlineIcon'

CalendarAccountOutlineIcon.defaultProps = {
  size: 24
}

export default CalendarAccountOutlineIcon
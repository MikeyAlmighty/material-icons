import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarAccountIcon = ({
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
    <path d='M12,10C14,10 15,12.42 13.59,13.84C12.17,15.26 9.75,14.25 9.75,12.25C9.75,11 10.75,10 12,10M16.5,19H7.5V17.88C7.5,16.63 9.5,15.63 12,15.63C14.5,15.63 16.5,16.63 16.5,17.88M19,20H5V9H19M16,2V4H8V2H6V4H5C3.9,4 3,4.9 3,6V20C3,21.1 3.9,22 5,22H19C20.1,22 21,21.1 21,20V6C21,4.9 20.1,4 19,4H18V2H16Z' />
  </Svg>
)

CalendarAccountIcon.displayName = 'CalendarAccountIcon'

CalendarAccountIcon.defaultProps = {
  size: 24
}

export default CalendarAccountIcon
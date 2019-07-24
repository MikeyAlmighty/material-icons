import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const CalendarExportIcon = ({
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
    <path d='M12,22L16,18H13V12H11V18H8M19,4H18V2H16V4H8V2H6V4H5C3.9,4 3,4.9 3,6V20C3,21.1 3.9,22 5,22H8V20H5V9H19V20H16V22H19C20.1,22 21,21.1 21,20V6C21,4.9 20.1,4 19,4Z' />
  </Svg>
)

CalendarExportIcon.displayName = 'CalendarExportIcon'

CalendarExportIcon.defaultProps = {
  size: 24
}

export default CalendarExportIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MonitorOffIcon = ({
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
    <path d='M14,18V20H16V22H8V20H10V18H3C1.9,18 1,17.1 1,16V4L0,3L1.41,1.58L22.16,22.34L20.75,23.75L15,18H14M3,16H13L3,6V16M21,2C22.1,2 23,2.9 23,4V16C23,17.1 22.1,18 21,18H20.66L18.66,16H21V4H6.66L4.66,2H21Z' />
  </Svg>
)

MonitorOffIcon.displayName = 'MonitorOffIcon'

MonitorOffIcon.defaultProps = {
  size: 24
}

export default MonitorOffIcon
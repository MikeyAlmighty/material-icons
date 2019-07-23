import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MonitorIcon = ({
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
    <path d='M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16C1,17.1 1.9,18 3,18H10V20H8V22H16V20H14V18H21C22.1,18 23,17.1 23,16V4C23,2.89 22.1,2 21,2Z' />
  </Svg>
)

MonitorIcon.displayName = 'MonitorIcon'

MonitorIcon.defaultProps = {
  size: 24
}

export default MonitorIcon
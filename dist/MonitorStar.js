import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const MonitorStarIcon = ({
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
    <path d='M21,16V4H3V16H21M21,2C22.1,2 23,2.9 23,4V16C23,17.1 22.1,18 21,18H14V20H16V22H8V20H10V18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M12.97,9H16L13.53,10.76L14.47,13.67L12,11.87L9.53,13.67L10.47,10.76L8,9H11.03L12,6L12.97,9Z' />
  </Svg>
)

MonitorStarIcon.displayName = 'MonitorStarIcon'

MonitorStarIcon.defaultProps = {
  size: 24
}

export default MonitorStarIcon
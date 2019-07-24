import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ClockAlertOutlineIcon = ({
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
    <path d='M12,2C6.47,2 2,6.5 2,12C2,17.52 6.48,22 12,22C14.25,22 16.33,21.24 18,20V17.28C16.53,18.94 14.39,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C15.36,4 18.23,6.07 19.41,9H21.54C20.27,4.94 16.5,2 12,2M11,7V13L16.25,16.15L17,14.92L12.5,12.25V7H11M20,11V18H22V11H20M20,20V22H22V20H20Z' />
  </Svg>
)

ClockAlertOutlineIcon.displayName = 'ClockAlertOutlineIcon'

ClockAlertOutlineIcon.defaultProps = {
  size: 24
}

export default ClockAlertOutlineIcon
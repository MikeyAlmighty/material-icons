import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SeatOutlineIcon = ({
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
    <path d='M15,5V12H9V5H15M15,3H9C7.9,3 7,3.9 7,5V14H17V5C17,3.9 16.1,3 15,3M22,10H19V13H22V10M5,10H2V13H5V10M20,15H4V21H6V17H18V21H20V15Z' />
  </Svg>
)

SeatOutlineIcon.displayName = 'SeatOutlineIcon'

SeatOutlineIcon.defaultProps = {
  size: 24
}

export default SeatOutlineIcon
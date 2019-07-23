import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ParkingIcon = ({
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
    <path d='M13.2,11H10V7H13.2C14.3,7 15.2,7.9 15.2,9C15.2,10.1 14.3,11 13.2,11M13,3H6V21H10V15H13C16.31,15 19,12.31 19,9C19,5.68 16.31,3 13,3Z' />
  </Svg>
)

ParkingIcon.displayName = 'ParkingIcon'

ParkingIcon.defaultProps = {
  size: 24
}

export default ParkingIcon
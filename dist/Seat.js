import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SeatIcon = ({
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
    <path d='M4,18V21H7V18H17V21H20V15H4V18M19,10H22V13H19V10M2,10H5V13H2V10M17,13H7V5C7,3.9 7.9,3 9,3H15C16.1,3 17,3.9 17,5V13Z' />
  </Svg>
)

SeatIcon.displayName = 'SeatIcon'

SeatIcon.defaultProps = {
  size: 24
}

export default SeatIcon
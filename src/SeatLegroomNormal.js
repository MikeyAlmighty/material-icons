import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const SeatLegroomNormalIcon = ({
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
    <path d='M5,12V3H3V12C3,14.76 5.24,17 8,17H14V15H8C6.34,15 5,13.66 5,12M20.5,18H19V11C19,9.9 18.1,9 17,9H12V3H6V11C6,12.66 7.34,14 9,14H16V21H20.5C21.33,21 22,20.33 22,19.5C22,18.67 21.33,18 20.5,18Z' />
  </Svg>
)

SeatLegroomNormalIcon.displayName = 'SeatLegroomNormalIcon'

SeatLegroomNormalIcon.defaultProps = {
  size: 24
}

export default SeatLegroomNormalIcon
import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const HotelIcon = ({
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
    <path d='M19,7H11V14H3V5H1V20H3V17H21V20H23V11C23,8.79 21.21,7 19,7M7,13C8.66,13 10,11.66 10,10C10,8.34 8.66,7 7,7C5.34,7 4,8.34 4,10C4,11.66 5.34,13 7,13Z' />
  </Svg>
)

HotelIcon.displayName = 'HotelIcon'

HotelIcon.defaultProps = {
  size: 24
}

export default HotelIcon
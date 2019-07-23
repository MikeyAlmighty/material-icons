import React from 'react'
import styled from 'styled-components'
import { space, color } from 'styled-system'

const Svg = styled('svg')({ flex: 'none' }, space, color)

const ViewDayIcon = ({
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
    <path d='M2,3V6H21V3M20,8H3C2.45,8 2,8.45 2,9V15C2,15.55 2.45,16 3,16H20C20.55,16 21,15.55 21,15V9C21,8.45 20.55,8 20,8M2,21H21V18H2V21Z' />
  </Svg>
)

ViewDayIcon.displayName = 'ViewDayIcon'

ViewDayIcon.defaultProps = {
  size: 24
}

export default ViewDayIcon